import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('isr')
export class Isr {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text')
    name: string;
}
