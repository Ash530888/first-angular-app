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
}
