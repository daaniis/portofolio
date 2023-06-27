import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { User } from './entities/user.entity';
import { ConfigModule } from 'src/config/config.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      global: true,
      secret: 'jhqwufkqw',
      signOptions: { expiresIn: '60s' },
    }),
    ConfigModule,
  ],
  providers: [UsersResolver, UsersService, JwtService],
  exports: [UsersService, JwtModule],
})
export class UsersModule {}
