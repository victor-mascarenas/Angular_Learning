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
    showDiv = true;
    randomNumbers = <[]>generateRandomNumbers();
}