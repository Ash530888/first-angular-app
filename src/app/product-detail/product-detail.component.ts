import { Component, Input } from '@angular/core';
import { Product } from '../products/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product? : Product;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private location: Location){}
  
  ngOnInit(): void{
    this.getProduct();
  }
  
  getProduct(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).subscribe(product => this.product = product);
  }

  goBack(): void{
    this.location.back();
  }

  save(): void{
    if(this.product){
      this.productService.updateProduct(this.product)
      .subscribe(() => this.goBack());
    }
  }
}
