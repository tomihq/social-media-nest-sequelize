import {  Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./post.entity";
import { User } from "src/auth/entities/user.entity";

@Entity('retweets')
export class Retweet {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @ManyToOne(() => Post, (post) => post.retweets)
    postId: Post

    @ManyToOne(() => User, (user) => user.retweets)
    userId: User

}
