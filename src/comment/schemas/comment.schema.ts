import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;

@Schema({ timestamps: true })
export class Comment extends Document {
  @Prop({ required: true })
  postId: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  mail: string;

  @Prop({ required: true })
  message: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
