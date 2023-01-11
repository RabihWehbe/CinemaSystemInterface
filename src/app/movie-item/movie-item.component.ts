import { Component, Input } from '@angular/core';

@Component({
  selector: 'movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
  @Input() genere: string = 'action';
  @Input() name: string = 'The Revenant';

  @Input() rate : string = '0';

  @Input() img : string = 'assets/images/uploads/slider2.jpg';
}

