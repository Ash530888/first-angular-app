import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from '../product.service';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, public messageService: MessageService, private router:Router){}

  ngOnInit() : void{
    this.getProducts();
  }

  getProducts() : void{
    this.productService.getProducts()
    .subscribe(products => this.products = products);
  }

  addNewProduct(productName: string, productPrice: string, productQuantity: string): void{
    productName=productName.trim();
    if(!productName) {return;}

    const price = parseFloat(productPrice);
    const quantity = parseInt(productQuantity);
    this.productService.addNewProduct({name: productName, price:isNaN(price)? 0 : price, quantity:isNaN(quantity)? 0 : quantity} as Product)
    .subscribe(product => {
      this.products.push(product)
    });
  }

  delete(product: Product): void{
    this.products = this.products.filter(p => p !== product) // filter out the current product
    this.productService.deleteProduct(product.id).subscribe();
  }
}
