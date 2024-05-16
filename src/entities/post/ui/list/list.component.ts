import {Component, inject, OnInit} from '@angular/core';
import {PostService, PostStorage} from '@entities/post';
import {ItemComponent} from '@entities/post/ui';

@Component({
  selector: 'post-list',
  standalone: true,
  imports: [
    ItemComponent
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  private readonly postService = inject(PostService);
  readonly postStorage = inject(PostStorage);

  ngOnInit() {
    this.postService.getPosts();
  }
}
