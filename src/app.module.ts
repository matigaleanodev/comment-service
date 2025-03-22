import { Module } from '@nestjs/common';
import { CommentModule } from './comment/comment.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URL || ''),
    CommentModule,
  ],
})
export class AppModule {}
