import { User } from 'src/auth/entities/user.entity';

import { BelongsTo, Column, CreatedAt, DataType, Default, PrimaryKey, Table, UpdatedAt, Model } from 'sequelize-typescript';

@Table({
  tableName: 'posts'
})
export class Post extends Model{
  
  @PrimaryKey
  @Column(DataType.UUID)
  id: string;

  @Column(DataType.TEXT)
  body: string;

  @BelongsTo(() => User, {foreignKey: 'posts'})
  user: User;

  @Column({ type: DataType.ARRAY(DataType.STRING) })
  attachments: string[];

  @Default(0)
  @Column(DataType.INTEGER)
  likes: number;

  @Default(0)
  @Column(DataType.INTEGER)
  saves: number;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
}
