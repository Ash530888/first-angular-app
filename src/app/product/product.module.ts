import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/products.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductModule { 
}
