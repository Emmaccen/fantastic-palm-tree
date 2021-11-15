import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IStarWars } from './IStarWars';
import { catchError, tap } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root',
})
export class StarWarsService implements OnInit {
  private _apiUrl = 'https://swapi.dev/api/people';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getStarWars(): Observable<IStarWars[]> {
    return this.http.get<IStarWars[]>(this._apiUrl).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // client side
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      // server side
      errorMessage = `Server returned code : ${err.status}, Error message is : ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}