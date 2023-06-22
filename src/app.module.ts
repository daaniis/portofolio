import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { User } from './users/entities/user.entity';
import { Portofolio } from './portofolio/entities/portofolio.entity';
import { PortofolioModule } from './portofolio/portofolio.module';
import { BlogModule } from './blog/blog.module';
import { Blog } from './blog/entities/blog.entity';
import { ClientModule } from './client/client.module';
import { Client } from './client/entities/client.entity';
import { Divisi } from './divisi/entities/divisi.entity';
import { DivisiModule } from './divisi/divisi.module';
import { KritikSaranModule } from './kritik_saran/kritik_saran.module';
import { KritikSaran } from './kritik_saran/entities/kritik_saran.entity';
import { NeedUsModule } from './need_us/need_us.module';
import { NeedUs } from './need_us/entities/need_us.entity';
import { KaryawanModule } from './karyawan/karyawan.module';
import { Karyawan } from './karyawan/entities/karyawan.entity';
import { JenisBlogModule } from './jenis_blog/jenis_blog.module';
import { JenisBlog } from './jenis_blog/entities/jenis_blog.entity';
import { JenisProjectModule } from './jenis_project/jenis_project.module';
import { JenisProject } from './jenis_project/entities/jenis_project.entity';
import { APP_GUARD } from '@nestjs/core';
import { KritikSaranGuard } from './kritik_saran/kritik_saran.guard';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: {
        federation: 2,
      },
      sortSchema: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db.ydpqavxvgfrmcfbkcjai.supabase.co',
      port: 5432,
      username: 'postgres',
      password: 'kTck3DKIQbxGLZTC',
      database: 'postgres',
      entities: [
        User,
        Portofolio,
        Blog,
        Client,
        Divisi,
        KritikSaran,
        NeedUs,
        Karyawan,
        JenisBlog,
        JenisProject,
      ],
      synchronize: true,
      autoLoadEntities: true,
    }),
    // JwtModule.register({
    //   secret: 'secret',
    //   signOptions: { expiresIn: '60s' },
    // }),
    UsersModule,
    PortofolioModule,
    BlogModule,
    ClientModule,
    DivisiModule,
    KritikSaranModule,
    NeedUsModule,
    KaryawanModule,
    JenisBlogModule,
    JenisProjectModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: KritikSaranGuard,
    },
  ],
})
export class AppModule {}
