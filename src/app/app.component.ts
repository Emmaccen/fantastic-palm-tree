import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <nav class="navbar navbar-expand navbar-light bg-light">
        <a class="navbar-brand">{{ pageTitle }}</a>
        <ul class="nav nav-pills">
          <li><a class="nav-link" routerLink="/welcome">Home</a></li>
          <li><a class="nav-link" routerLink="/products">Products</a></li>
          <li><a class="nav-link" routerLink="/star-wars">Star Wars</a></li>
        </ul>
      </nav>
      <div class="my-5">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pageTitle = 'product-store';
}
