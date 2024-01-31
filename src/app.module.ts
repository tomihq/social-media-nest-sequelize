import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { RevalidateTagModule } from './revalidateTag/revalidate-tag.module';
import { RevalidatePathModule } from './revalidatePath/revalidate-path.module';
import { MailModule } from './mail/mail.module';
import { AnswersModule } from './posts/postsAnswers/posts-answers.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    PostsModule,
    AnswersModule,
    RevalidateTagModule,
    RevalidatePathModule,
    MailModule,
    FilesModule,
  ],
})
export class AppModule {}
