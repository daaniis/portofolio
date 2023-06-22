import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      global: true,
      secret: 'jhqwufkqw',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [UsersResolver, UsersService, JwtService],
  exports: [UsersService, JwtModule],
})
export class UsersModule {}
