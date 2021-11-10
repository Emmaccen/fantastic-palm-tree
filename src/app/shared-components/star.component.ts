import {
  Component,
  OnChanges,
  SimpleChanges,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  templateUrl: './star.component.html',
  selector: 'star-component',
  styleUrls: ['./star.component.scss'],
})
export class StarComponent implements OnChanges {
  @Input() stars: number = 0;
  @Output() notify: EventEmitter<string> = new EventEmitter();
  cropSize: number = 75;

  ngOnChanges(changes: SimpleChanges): void {
    this.cropSize = (this.stars * 75) / 5;
    // console.log(changes);
  }
  starClicked(): void {
    console.log('stars clicked');
    this.notify.emit(`${this.stars}`);
  }
}
