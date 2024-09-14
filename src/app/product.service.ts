import { Injectable } from '@angular/core';
import { Product } from './products/product';
import { PRODUCTS } from './products/list-products';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsURL = 'api/products'; // URL to web api
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private messageService: MessageService,
    private http: HttpClient) { }

  private log(message: string){
    this.messageService.add(message);
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.productsURL)
    .pipe(tap(_ => this.log('fetched products')),
      catchError(this.handleError<Product[]>('getProducts', [])));
  }

  // handle failed http operation without crashing app
  // returns a error-handler function which takes error param as expected
  handleError<T>(functionName: String, safeReturn?: T){
    return (error: any): Observable<T> => {
      console.error(error); // log error to console
      this.log(`${functionName} failed: ${error.message}`);
      return of(safeReturn as T);
    }
  }

  // get product by id, 404 if invalid id
  getProduct(id: number): Observable<Product>{
    const url = `${this.productsURL}/${id}`;
    return this.http.get<Product>(url)
    .pipe(tap(_ => this.log('got product with id: '+id)),
    catchError(this.handleError<Product>(`getProduct`))
    );
  }

  updateProduct(product: Product){
    const url = `${this.productsURL}/${product.id}`;
    return this.http.put(url, product, this.httpOptions)
    .pipe(tap(_ => this.log('updated product with id: '+product.id)),
    catchError(this.handleError<any>(`updateProduct`))
    );
  }

  addNewProduct(newProduct: Product): Observable<Product>{
    return this.http.post<Product>(this.productsURL, newProduct, this.httpOptions).pipe(
      tap(_ => this.log("Added New Product: "+newProduct.name+", id="+newProduct.id)),
      catchError(this.handleError<Product>('addNewProduct'))
    );
  }

  deleteProduct(id: number): Observable<Product>{
    const url = this.productsURL+"/"+id;
    return this.http.delete<Product>(url, this.httpOptions).pipe(
      tap(_ => this.log("deleted product with id="+id)),
        catchError(this.handleError<Product>("deleteProduct"))
    );
  }
}
