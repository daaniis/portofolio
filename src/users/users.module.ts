import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { User } from './entities/user.entity';
import { ConfigModule } from 'src/config/config.module';
import { ConfigService } from 'src/config/config.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    // JwtModule.registerAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: (config: ConfigService) => {
    //     return {
    //       secret: config.JWT_SECRET,
    //       signOptions: { expiresIn: config.JWT_EXPIRED_IN },
    //       global: true,
    //     };
    //   },
    // }),
    JwtModule.register({
      global: true,
      secret: 'asdfghjkl',
      signOptions: { expiresIn: '1d' },
    }),
    ConfigModule,
  ],
  providers: [UsersResolver, UsersService, JwtService],
  exports: [UsersService, JwtModule],
})
export class UsersModule {}
