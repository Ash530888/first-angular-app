import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  product : Product = {
    id: 1,
    name: "shoes",
    price: 10,
    quantity: 5
  };
}
