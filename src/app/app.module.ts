import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product list/product-list.component';
import { StarComponent } from './shared-components/star.component';
import { HttpClientModule } from '@angular/common/http';
import { StarWarsComponent } from './star-wars/star-wars.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent, StarComponent, StarWarsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
