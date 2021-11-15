import { Component, OnInit } from '@angular/core';
import { IProduct } from './interface/product';
import { ProductService } from './services/product.service';
@Component({
  templateUrl: './product-list.component.html',
  selector: 'product-list',
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  filterable: IProduct[] = [];

  constructor(private productList: ProductService) {}

  headerStars = '';
  onNotify(message: string): void {
    this.headerStars = message;
  }
  ngOnInit(): void {
    console.log('application started');
    this.products = this.productList.getProducts();
    this.filterable = this.products;
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
}
