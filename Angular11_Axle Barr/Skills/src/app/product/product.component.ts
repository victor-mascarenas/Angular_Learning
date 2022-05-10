import { Component } from "@angular/core";
declare const generateRandomNumbers: any;

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: [
        './product.component.css'
    ]
})

export class ProductComponent{
    randomNumbers = <[]>generateRandomNumbers();
    page: number = 1;
    itemsToDisplay: number = 10;

    pageChanged(event: any){
        this.page = event;
    }
}