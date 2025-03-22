/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment } from './schemas/comment.schema';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel('Comment') private readonly CommentModel: Model<Comment>,
  ) {}

  create(createCommentDto: CreateCommentDto): Promise<Comment> {
    const newComment = new this.CommentModel(createCommentDto);
    return newComment.save();
  }

  async findByPost(postId: string): Promise<Comment[]> {
    const commentList = await this.CommentModel.find({ postId }).exec();

    if (!commentList) return [];

    return commentList;
  }

  async remove(id: number): Promise<Comment | { message: string }> {
    const comment = await this.CommentModel.findByIdAndDelete(id).exec();

    if (!comment) return { message: 'No se encontró comentario' };

    return comment;
  }
}
