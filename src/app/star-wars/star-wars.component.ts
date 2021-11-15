import { Component, OnInit } from '@angular/core';
import { IStarWars } from './IStarWars';
import { StarWarsService } from './starWars.service';

@Component({
  selector: 'star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.scss'],
})
export class StarWarsComponent implements OnInit {
  starWarsData: IStarWars[] = [];

  ngOnInit(): void {
    // this.starWarsData = StarWarsService.getStarWarsData();
  }
}
