import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from '../product.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  selectedProduct?: Product;
  products: Product[] = [];

  constructor(private productService: ProductService, public messageService: MessageService){}

  ngOnInit() : void{
    this.getProducts();
  }

  getProducts() : void{
    this.productService.getProducts()
    .subscribe(products => this.products = products);
  }

  onSelect(product: Product): void{
    this.selectedProduct = product;
    this.messageService.add(`ProductsComponent: Selected product id=${product.id}`);
  }
}
