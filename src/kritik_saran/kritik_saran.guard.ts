import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class KritikSaranGuard implements CanActivate {
  // canActivate(
  //   context: ExecutionContext,
  // ): boolean | Promise<boolean> | Observable<boolean> {
  //   const request = context.switchToHttp().getRequest();
  //   console.log(request);
  //   return true;
  // }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // const request = context.switchToHttp().getRequest();
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();

    console.log(req.headers.authorization);

    // const token = this.extractTokenFromHeader(request);
    // if (!token) {
    //   throw new UnauthorizedException();
    // }
    try {
      // const payload = await this.jwtService.verifyAsync(
      //   token,
      //   {
      //     secret: jwtConstants.secret
      //   }
      // );
      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlers
      // request['user'] = payload;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }
}