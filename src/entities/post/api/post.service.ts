import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostStorage} from '@entities/post';
import {PostDto} from '@entities/post';
import {postMapper} from '@entities/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly http = inject(HttpClient);
  private readonly storage = inject(PostStorage);

  getPosts(): void {
    this.http.get<PostDto[]>('https://jsonplaceholder.typicode.com/posts').subscribe({
      next: (response: PostDto[]) => {
        this.storage.list.set(response.map(postMapper));
        console.log(this.storage.list());
      }
    })
  }
}
