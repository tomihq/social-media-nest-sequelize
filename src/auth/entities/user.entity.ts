import { Post } from 'src/posts/entities/post.entity';
import { Table, Column, Model,  Index, Default, Validate, DataType, CreatedAt, UpdatedAt, HasMany } from 'sequelize-typescript';

@Table({
  tableName: "User"
})
export class User extends Model {
  @Column({primaryKey: true})
  id: string;

  @Column(DataType.TEXT)
  fullName: string;

  @Index({ unique: true })
  @Column(DataType.TEXT)
  username: string;

  @Default("")
  @Column(DataType.TEXT)
  description: string;

  @Validate({isEmail: true})
  @Index({unique: true})
  @Column(DataType.TEXT)
  email: string;

  @Column(DataType.TEXT)
  password: string; //TODO: Remove it from default queries

  @Default(false)
  @Column(DataType.BOOLEAN)
  isActive: boolean;

  @Default("")
  @Column(DataType.TEXT)
  avatarUrl: string;

  @Default(["user"])
  @Column({ type: DataType.ARRAY(DataType.STRING) })
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
