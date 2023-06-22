import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { Blog } from 'src/blog/entities/blog.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'app_jenisblog' })
@ObjectType()
export class JenisBlog {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id_jenisblog: number;

  @Column()
  @Field(() => String)
  @IsNotEmpty()
  bidang_jenisblog: string;

  @OneToMany(() => Blog, (blog) => blog.jenisblog)
  @JoinColumn()
  @Field(() => [Blog])
  blog: Blog;

  @Column()
  @UpdateDateColumn()
  createAt: Date;

  @Column()
  @UpdateDateColumn()
  updateAt: Date;
}
