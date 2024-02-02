import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { RevalidateTagModule } from './revalidateTag/revalidate-tag.module';
import { RevalidatePathModule } from './revalidatePath/revalidate-path.module';
import { MailModule } from './mail/mail.module';
import { AnswersModule } from './posts/postsAnswers/posts-answers.module';
import { FilesModule } from './files/files.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { HobbiesModule } from './hobbies/hobbies.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './auth/entities/user.entity';
import { Post } from './posts/entities/post.entity';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      models: [User, Post]
    }),
    UsersModule,
    PostsModule,
    AnswersModule,
    RevalidateTagModule,
    RevalidatePathModule,
    MailModule,
    FilesModule,
    CloudinaryModule,
    HobbiesModule,
  ],
})
export class AppModule {}
