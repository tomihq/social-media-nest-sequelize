import { Post } from 'src/posts/entities/post.entity';
import { PostRetweet } from 'src/posts/entities/retweet.entity';
import { Hobby } from 'src/hobbies/entities/hobby.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  fullName: string;

  @Column('text', {
    unique: true,
  })
  username: string;

  @Column('text', {
    default: '',
  })
  description: string;

  @Column('text', {
    unique: true,
  })
  email: string;

  @Column('text', {
    select: false,
  })
  password: string;

  @Column('bool', {
    default: true,
  })
  isActive: boolean;

  @Column('text', {
    default: '',
  })
  avatarUrl: string;

  @Column('text', {
    array: true,
    default: ['user'],
  })
  roles: string[];

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @ManyToMany(() => Hobby, { cascade: true })
  @JoinTable({ name: 'user_hobbies' }) //siempre debe de estar si se usa many to many
  hobbies: Hobby[];

  @OneToMany(() => PostRetweet, (postRetweet) => postRetweet.userId)
  retweets: PostRetweet[];

  @BeforeInsert()
  checkFieldsBeforeInsert() {
    this.email = this.email.toLowerCase().trim();
    if (!this.username) {
      this.username = this.fullName
        .toLowerCase()
        .replaceAll(' ', '_')
        .replaceAll("'", '');
    }
  }

  @BeforeUpdate()
  checkFieldsBeforeUpdate() {
    this.checkFieldsBeforeInsert();
  }
}
