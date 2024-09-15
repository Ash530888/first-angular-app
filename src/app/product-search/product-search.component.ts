import { Component, OnInit} from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../products/product';
import { of, Observable, Subject, switchMap } from 'rxjs';
import { debounceTime, distinctUntilChanged} from 'rxjs';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.css'
})
export class ProductSearchComponent implements OnInit{
  searchResults$!: Observable<Product[]>; // subscribed to and used in template
  private searchTerms = new Subject<string>; // Observable holding/releasing stream of strings/search terms

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.searchResults$ = this.searchTerms.pipe(debounceTime(300), // wait 300ms after input stops
                          distinctUntilChanged(), // makes sure no consecutive, duplicate searches
                          switchMap((term: string) => this.productService.searchProducts(term))); // 2 prev passed, then switches to current next
  }
  
  // push the term being searched for into searchTerms Observable
  search(term: string): void{
    this.searchTerms.next(term);
  }
}
