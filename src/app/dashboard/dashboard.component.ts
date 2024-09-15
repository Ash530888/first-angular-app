import { Component } from '@angular/core';
import { Product } from '../products/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  products: Product[] = [];

  constructor(private productService: ProductService){}

  getProducts(): void{
    this.productService.getProducts().subscribe(products => this.products=products.slice(1,5));
  }

  ngOnInit(): void{
    this.getProducts();
  }

  
  search(name: string): void{
    this.productService;
  }
  
}
