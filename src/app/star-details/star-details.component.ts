import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarWarsService } from '../star-wars/starWars.service';
import { Subscription } from 'rxjs';
import { IStarWarDetail } from '../star-wars/IStarWars';

@Component({
  selector: 'app-star-details',
  templateUrl: './star-details.component.html',
  styleUrls: ['./star-details.component.scss'],
})
export class StarDetailsComponent implements OnInit {
  details!: IStarWarDetail;
  err = '';
  constructor(
    private activeRoute: ActivatedRoute,
    private starWarService: StarWarsService,
    private navigate: Router
  ) {}

  sub!: Subscription;
  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.sub = this.starWarService.getStarWarDetail(id!).subscribe({
      next: (data) => {
        this.details = data;
      },
      error: (err) => {
        this.err = err;
        console.log('an error occurred: ', this.err);
      },
    });
  }

  goBack() {
    this.navigate.navigate(['/star-wars']);
  }
}
