import { Injectable } from '@angular/core';
import { Product } from './products/product';
import { PRODUCTS } from './products/list-products';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private messageService: MessageService) { }

  getProducts(): Observable<Product[]>{
    const products = of(PRODUCTS);
    this.addMessage("HeroService: fetched products");
    return products;
  }

  getProduct(id: number): Observable<Product>{
    const product = PRODUCTS.find(product => product.id === id)!;
    this.messageService.add(`HeroService: fetched product id=${id}`);
    return of(product);
  }

  addMessage(message: String): void{
    this.messageService.add(message);
  }
}
