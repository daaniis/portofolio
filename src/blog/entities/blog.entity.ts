import { ObjectType, Field, Int } from '@nestjs/graphql';
import { JenisBlog } from 'src/jenis_blog/entities/jenis_blog.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { fileURLToPath } from 'url';

@Entity({ name: 'app_blog' })
@ObjectType()
export class Blog {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id_blog: number;

  @Column()
  @Field(() => String)
  judul: string;

  @Column()
  @Field(() => String)
  tanggal: string;

  @Column()
  @Field(() => String)
  isi: string;

  @Column()
  @Field(() => String)
  author: string;

  @Column()
  @Field(() => String, { description: 'merupakan gambar project' })
  gambar: string;

  @Column({ default: 0 })
  @Field(() => Int)
  jumlah_pengunjung?: number;

  @Column()
  @Field(() => Int)
  id_jenisblog: number;

  @ManyToOne(() => JenisBlog, (jenisblog) => jenisblog.blog)
  @JoinColumn({ name: 'id_jenisblog' })
  @Field(() => JenisBlog, { nullable: true })
  jenisblog?: JenisBlog;

  @Column()
  @UpdateDateColumn()
  createAt: Date;

  @Column()
  @UpdateDateColumn()
  updateAt: Date;
}
