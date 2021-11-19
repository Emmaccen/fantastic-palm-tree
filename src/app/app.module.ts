import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product list/product-list.component';
import { StarComponent } from './shared-components/star.component';
import { HttpClientModule } from '@angular/common/http';
import { StarWarsComponent } from './star-wars/star-wars.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { StarDetailsComponent } from './star-details/star-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    StarWarsComponent,
    WelcomeComponent,
    StarDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'star-wars', component: StarWarsComponent },
      { path: 'star-wars/:id', component: StarDetailsComponent },
      { path: '', component: WelcomeComponent, pathMatch: 'full' },
      { path: '**', component: WelcomeComponent, pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
