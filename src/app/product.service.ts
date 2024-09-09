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
    this.addMessage("HeroService: fetched heroes");
    return products;
  }

  addMessage(message: String): void{
    this.messageService.add(message);
  }
}
