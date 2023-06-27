import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { createClient } from 'redis';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // const client = createClient({
  //   password: 'mkrnwjLMzJaqtrLI8d7Ablq9bITH39Jr',
  //   socket: {
  //     host: 'redis-12614.c74.us-east-1-4.ec2.cloud.redislabs.com',
  //     port: 12614,
  //   },
  // });

  // client.connect();

  // await client.set('key', 'value');
  // const value = await client.get('key');
  // console.log(value);
  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   AppModule,
  //   {
  //     transport: Transport.REDIS,
  //     options: {
  //       host: 'localhost',
  //       port: 6379,
  //     },
  //   },
  // );
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
