import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interface/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): IProduct[] {
    return [
      {
        productName: 'Hammer',
        code: 'J90-N23R3-R3R',
        price: 45.99,
        starRating: 4.3,
        img: 'https://lh3.googleusercontent.com/ogw/ADea4I7RsvE6g4QHoadQ672IwHgG4MSCMnnmCmOAUzA4=s32-c-mo',
        availability: `${new Date().toLocaleDateString()}`,
      },
      {
        productName: 'Yellow Bird',
        code: '7H0JR-R29HR-4R',
        price: 99.99,
        starRating: 2.3,
        img: 'https://lh3.googleusercontent.com/ogw/ADea4I7RsvE6g4QHoadQ672IwHgG4MSCMnnmCmOAUzA4=s32-c-mo',
        availability: `${new Date().toLocaleDateString()}`,
      },
      {
        productName: 'Justin Fork',
        code: 'H73R-F3TH3-G35',
        price: 19.99,
        starRating: 5.0,
        img: 'https://lh3.googleusercontent.com/ogw/ADea4I7RsvE6g4QHoadQ672IwHgG4MSCMnnmCmOAUzA4=s32-c-mo',
        availability: `${new Date().toLocaleDateString()}`,
      },
    ];
  }
}
