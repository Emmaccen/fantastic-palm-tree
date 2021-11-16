import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IStarWars } from './IStarWars';
import { StarWarsService } from './starWars.service';

@Component({
  // selector: 'star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.scss'],
})
export class StarWarsComponent implements OnInit, OnDestroy {
  starWarsData!: IStarWars;
  error: string = '';
  sub!: Subscription;
  constructor(private service: StarWarsService) {}

  ngOnInit(): void {
    this.sub = this.service.getStarWars().subscribe({
      next: (data) => {
        this.starWarsData = data;
      },
      error: (error) => (this.error = error),
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
