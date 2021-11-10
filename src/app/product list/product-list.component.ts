import { Component, OnInit } from '@angular/core';
import { IProduct } from './interface/product';
@Component({
  templateUrl: './product-list.component.html',
  selector: 'product-list',
})
export class ProductListComponent implements OnInit {
  headerStars = '';
  onNotify(message: string): void {
    this.headerStars = message;
  }
  ngOnInit(): void {
    console.log('application started');
    this.filterBy = 'hammer';
  }

  title = 'Product List';
  imageWidth = 50;
  imageMargin = 10;
  imageRadius = '50%';

  private _filterBy: string = '';

  get filterBy(): string {
    return this._filterBy;
  }

  set filterBy(value: string) {
    this._filterBy = value;
    this.filterable = this.filterList(value);
  }

  showImage = true;

  toggleImage() {
    this.showImage = !this.showImage;
  }

  filterList(value: string): IProduct[] {
    return this.products.filter((product) =>
      product.productName
        .toLocaleLowerCase()
        .includes(value.toLocaleLowerCase().trim())
    );
  }

  filterable: IProduct[] = [];
  products: IProduct[] = [
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
