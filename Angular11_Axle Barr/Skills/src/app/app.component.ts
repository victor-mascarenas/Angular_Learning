import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Skills';
  quantity: number = 0;

  parent_addProduct(newProduct: string){
    console.log(newProduct);
  }

  /* @ViewChild(ProductComponent)
  productComponent: ProductComponent; */
  /* @ViewChild('productRef')
  productComponent: ProductComponent = {} as ProductComponent; */
  @ViewChild(ProductComponent)
  productComponent: ProductComponent = {} as ProductComponent;

  ngAfterViewInit(){
    this.productComponent.child1Method();
    this.quantity = this.productComponent.inStock;
    console.log(this.quantity);
  }
}
