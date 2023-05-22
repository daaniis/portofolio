import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const user = this.userRepository.create(createUserInput);
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    return await this.userRepository.save(user);
  }

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

  // findOne(userId: string) {
  //   const user = this.userRepository.findOne(userId);
  //   return this.userRepository.find((user) => user.userId === userId);
  // }

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
    };
  }
}
