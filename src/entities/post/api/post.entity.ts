import {Post} from '@entities/post';

export class PostEntity {
  private source: Post;

  get title(): string {
    return this.source.title;
  }

  get body(): string {
    return this.source.body;
  }

  get createdAt(): string {
    return this.source.meta.createdAt;
  }

  get views(): number {
    return this.source.meta.views;
  }

  get meta(): Post['meta'] {
    return this.source.meta;
  }

  get userId(): number {
    return this.source.userId;
  }

  get id(): number {
    return this.source.id;
  }

  constructor(source: Post) {
    this.source = source;
  }
}
