import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [{path:'products', component:ProductsComponent},
                                {path:'dashboard', component:DashboardComponent},
                                {path:'', redirectTo:'/dashboard', pathMatch:'full'},
                                {path:'detail/:id', component:ProductDetailComponent}];
