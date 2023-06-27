/* eslint-disable prettier/prettier */
import {
  CanActivate,
  CustomDecorator,
  ExecutionContext,
  Injectable,
  SetMetadata,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from './config/config.service';
import { Reflector } from '@nestjs/core';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = (): CustomDecorator => SetMetadata(IS_PUBLIC_KEY, true);
const config = new ConfigService();
@Injectable()
export class PublicGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private reflector: Reflector,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();
    // const tokenKey = req.headers?.authorization;
    let token: string;

    if (req?.headers?.authorization) {
      token = req?.headers?.authorization;
    } else {
      throw new UnauthorizedException('Invalid Token');    }

    // console.log(req.headers?.authorization);

    // if (tokenKey === 'AB') {
    //   return true;
    // }
    const token2 = token.split(' ');
    await this.jwtService.verifyAsync(
          token2[1],
          {
            secret: config.JWT_SECRET,
          }
        );
        return true;

  }
  
  // async checkTokenRedis(token: string): Promise<boolean> {
  //   return new Promise((resolve, reject) => {
  //     // menyimpan dan mengecek nilai token dengan redis
  //     this.redisClient.get(token, (err, reply) => {
  //       if (err) {
  //         reject(err);
  //       }
  //       resolve(reply === 'valid');
  //     });
  //   });
  // }
}
