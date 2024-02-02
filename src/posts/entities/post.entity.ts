import { User } from 'src/auth/entities/user.entity';

import { BelongsTo, Column, CreatedAt, DataType, Default, PrimaryKey, Table, UpdatedAt, Model } from 'sequelize-typescript';

@Table({
  tableName: 'posts'
})
export class Post extends Model{
  @Column(DataType.UUID)
  @PrimaryKey
  id: string;

  @Column(DataType.TEXT)
  body: string;

  @BelongsTo(() => User, {foreignKey: 'posts'})
  user: User;

  @Column({ type: DataType.ARRAY(DataType.STRING) })
  attachments: string[];

  @Column(DataType.INTEGER)
  @Default(0)
  likes: number;

  @Column(DataType.INTEGER)
  @Default(0)
  saves: number;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
}
