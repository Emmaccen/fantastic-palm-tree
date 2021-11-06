import { Component, OnInit } from '@angular/core';
import { IProduct } from './interface/product';
@Component({
  templateUrl: './product-list.component.html',
  selector: 'product-list',
})
export class ProductListComponent implements OnInit {
  ngOnInit(): void {
    console.log('application started');
  }

  title = 'Product List';
  imageWidth = 50;
  imageMargin = 10;
  imageRadius = '50%';

  filterBy = 'ham';

  showImage = true;

  toggleImage() {
    this.showImage = !this.showImage;
  }

  filterList() {
    //
  }

  //   products: IProduct[] = [
  //         productName: 'Hammer'
  //         price: 23.3,
  //         code: '98hf9283n93h',
  //         img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--fnOLwP2s--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/372534/450e41d1-63dc-4a79-adf9-3bd1abb70f49.jpg',
  //         starRating: 4.2,
  //         availability: `${new Date().toDateString()}`,
  //   ];
}
