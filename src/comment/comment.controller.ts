/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller()
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @MessagePattern('createComment')
  create(@Payload() createCommentDto: CreateCommentDto) {
    return this.commentService.create(createCommentDto);
  }

  @MessagePattern('comment.findByPost')
  findByPost(@Payload() postId: string) {
    return this.commentService.findByPost(postId);
  }

  @MessagePattern('removeComment')
  remove(@Payload() id: number) {
    return this.commentService.remove(id);
  }
}
