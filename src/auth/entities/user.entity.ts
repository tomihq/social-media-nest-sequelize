import { BeforeInsert, BeforeUpdate, Column, PrimaryGeneratedColumn } from "typeorm";

export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    fullName: string;

    @Column('text', {
        unique: true
    })
    email: string;

    @Column('text', {
        select: false 
    })
    password: string;
    
    @Column('bool', {
        default: true 
    })
    isActive: boolean;

    @Column('text', {
        array: true,
        default: ['user'],
      })
    roles: string[];

    @BeforeInsert()
    checkFieldsBeforeInsert() {
      this.email = this.email.toLowerCase().trim();
    }
  
    @BeforeUpdate()
    checkFieldsBeforeUpdate() {
      this.checkFieldsBeforeInsert();
    }

}
