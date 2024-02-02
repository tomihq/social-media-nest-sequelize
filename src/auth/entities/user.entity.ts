import { Post } from 'src/posts/entities/post.entity';
import { PostRetweet } from 'src/posts/entities/retweet.entity';
import { Hobby } from 'src/hobbies/entities/hobby.entity';
import { Table, Column, Model, PrimaryKey, Unique, Index, Default, Validate, DataType, CreatedAt, UpdatedAt, HasMany } from 'sequelize-typescript';

@Table({
  tableName: "User"
})
export class User extends Model {
  @Column({primaryKey: true})
  id: string;

  @Column(DataType.TEXT)
  fullName: string;

  @Column(DataType.TEXT)
  @Index({ unique: true })
  username: string;

  @Column(DataType.TEXT)
  @Default("")
  description: string;

  @Column(DataType.TEXT)
  @Validate({isEmail: true})
  @Index({unique: true})
  email: string;

  @Column(DataType.TEXT)
  password: string; //TODO: Remove it from default queries

  @Column(DataType.BOOLEAN)
  @Default(false)
  isActive: boolean;

  @Column(DataType.TEXT)
  @Default("")
  avatarUrl: string;

  @Column({ type: DataType.ARRAY(DataType.STRING) })
  @Default(["user"])
  roles: string[];

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date

  @HasMany(() => Post, {foreignKey: 'userId'})
  posts: Post[];
/* 
  @ManyToMany(() => Hobby, { eager: true, cascade: true })
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
  } */
}
