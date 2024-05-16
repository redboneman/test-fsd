import {inject, Injectable, signal} from '@angular/core';
import {PostEntity, PostService} from '@entities/post/api';

@Injectable({
  providedIn: 'root'
})
export class PostStorage {
  list = signal<PostEntity[]>([]);
}
