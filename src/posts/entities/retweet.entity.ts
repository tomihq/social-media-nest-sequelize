import {  Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./post.entity";
import { User } from "src/auth/entities/user.entity";

@Entity('posts_retweets')
export class PostRetweet {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @ManyToOne(() => Post, (post) => post.retweets)
    postId: Post

    @ManyToOne(() => User, (user) => user.retweets)
    userId: User

}
