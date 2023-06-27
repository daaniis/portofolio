/* eslint-disable prettier/prettier */
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class PublicGuard implements CanActivate {
  // private redisClient: Redis.RedisClientType;
  // constructor() {
  //   this.redisClient = Redis.createClient({
  //     host: 'localhost',
  //     port: 6379,
  //   });
  // }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();
    const tokenKey = req.headers?.authorization?.replace('Bearer', '');

    // console.log(req.headers?.authorization);

    if (tokenKey === 'AB') {
      return true;
    }
    throw new UnauthorizedException('Invalid Token');
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
