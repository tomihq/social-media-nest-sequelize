import { User } from "src/auth/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column('text')
    body: string;

    @ManyToOne(() => User, (user) => user.posts, {
        eager: true,
    })
    user: User;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;



}
