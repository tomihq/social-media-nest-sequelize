import { Column, AutoIncrement, DataType, Table, Model } from 'sequelize-typescript';

@Table({
  tableName: 'isr'
})
export class Isr extends Model {
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.STRING)
  name: string;
}
