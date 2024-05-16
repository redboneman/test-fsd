import {PostDto} from '@entities/post/api/post.dto';
import {PostEntity} from '@entities/post/api/post.entity';

export function postMapper(post: PostDto) {
  const createdAt = new Date().toLocaleString();
  const views = Math.random() * 100;
  return new PostEntity({...post, meta: {createdAt, views}});
}
