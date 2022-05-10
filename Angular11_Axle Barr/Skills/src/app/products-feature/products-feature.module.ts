import { NgModule } from '@angular/core';
import { ProductComponent } from './../product/product.component';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ClassifyPipe } from '../classify.pipe';

@NgModule({
  declarations: [
    ProductComponent,
    ClassifyPipe
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
