import {Component, input, InputSignal} from '@angular/core';
import {PostEntity} from '@entities/post';

@Component({
  selector: 'post-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  context: InputSignal<PostEntity> = input.required<PostEntity>()
}
