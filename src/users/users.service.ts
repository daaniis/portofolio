/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginUserInput } from './entities/login-user.input';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const user = this.userRepository.create(createUserInput);
    const hashedPassword = await bcrypt.hash(user.password, 8);
    user.password = hashedPassword;
    try {
      return await this.userRepository.save(user);
    } catch (error) {
      if (error.code === '23505') {
        throw new BadRequestException('Username Atau Email Sudah Tersedia!');
      } 
    throw new NotFoundException('User Tidak Ditemukan!')
    }
  }

  async validateUser(username: string, password: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { username } });
    console.log(user);
    if (user) {
      const valid = await bcrypt.compare(password, user.password);
      if (valid) {
        return user;
      }
      throw new BadRequestException('Login Gagal! Periksa Kembali Kredensial Anda');
    }
  }

  async login(user: LoginUserInput): Promise<User> {
    const result = await this.validateUser(user.username, user.password);
    console.log(result);
    if (result != null) {
      const jwt = await this.jwtService.signAsync({
        userId: result.userId,
        username: result.username,
      }, {
        secret: this.configService.JWT_SECRET,
        expiresIn: this.configService.JWT_EXPIRED_IN,
      },
      );
      result.token = jwt;
      return result;
    }
    return null;
  }

  // async login(user: LoginUserInput): Promise<User> {
  //   const result = await this.validateUser(user.username, user.password);
  //   return {
  //     token: this.jwtService.sign({
  //       userId: result.userId,
  //       username: result.username,
  //     }),
  //     result,
  //   };
  // }

  async findAll(): Promise<Array<User>> {
    return await this.userRepository.find();
  }

  async findOne(userId: number): Promise<User> {
    const user = this.userRepository.findOne({ where: { userId } });
    if (!user) {
      throw new NotFoundException('User Tidak Ditemukan');
    }
    return user;
  }

  async update(
    userId: number,
    updateUserInput: UpdateUserInput,
  ): Promise<User> {
    const user = await this.userRepository.preload({
      userId: userId,
      ...updateUserInput,
    });
    if (!user) {
      throw new NotFoundException('User Tidak Ditemukan');
    }
    return this.userRepository.save(user);
  }

  async remove(userId: number): Promise<User> {
    const user = await this.findOne(userId);
    await this.userRepository.remove(user);
    return {
      userId: userId,
      nohp: user.nohp,
      username: '',
      email: '',
      password: '',
      createAt: user.createAt,
      updateAt: user.updateAt,
    };
  }
}
