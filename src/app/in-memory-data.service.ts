import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './products/product';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService  {
  createDb() {
    const products: Product[] = [
      {id: 1, name: "shoes", price: 10.00, quantity: 50},
      {id: 2, name: "backpack", price: 35.50, quantity: 40},
      {id: 3, name: "trousers", price: 30.00, quantity: 10},
      {id: 4, name: "mystery item", price: 50.00, quantity: 5},
      {id: 5, name: "heels", price: 70.00, quantity: 100},
      {id: 6, name: "handbag", price: 90.00, quantity: 50},
      {id: 7, name: "trainers", price: 45.00, quantity: 100},
      {id: 8, name: "t-shirt", price: 10.00, quantity: 110},
      {id: 9, name: "blouse", price: 40.00, quantity: 50},
      {id: 10, name: "shirt", price: 20.00, quantity: 50}
    ];

    return {products};
  }

  // overriding genID method so that each product has ID
  // generate ID, 11 initial if len(products) = 0,
  // otherwise max_id+1
  genId(products: Product[]): number{
    return products.length > 0 ?
    Math.max(...products.map(product => product.id)) + 1 : 11;
  }

}
