import { User } from "src/auth/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PostRetweet } from "./retweet.entity";

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

    
    @Column('text', {
        array: true,
        default: [],
    })
    attachments: string[];

    @Column('int', {
        default: 0
    })
    likes: number;

    @OneToMany(() => PostRetweet, (retween) => retween.postId, {
        eager: true,
    })
    retweets: PostRetweet[];

    @Column('int', {
        default: 0
    })
    saves: number;

    @Column('text', {
        array: true,
        default: []
    })


    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;



}
