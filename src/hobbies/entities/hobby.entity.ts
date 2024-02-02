import { Column, CreatedAt, DataType, Model, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';

@Table({
  tableName: "hobby"
})
export class Hobby extends Model {
  @PrimaryKey
  @Column(DataType.UUID)
  id: string;

  @Column(DataType.STRING)
  name: string;

  @CreatedAt
  public created_at: Date;

  @UpdatedAt
  public updated_at: Date;
}
