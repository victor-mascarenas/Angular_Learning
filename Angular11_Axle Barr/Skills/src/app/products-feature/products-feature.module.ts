import { NgModule } from '@angular/core';
import { ProductComponent } from './../product/product.component';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    SharedModule,
    NgxPaginationModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductsFeatureModule { }
