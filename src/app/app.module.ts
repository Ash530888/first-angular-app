import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';

import { NgFor } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgFor
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }