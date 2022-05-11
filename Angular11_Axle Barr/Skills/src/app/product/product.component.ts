import { Component, Input } from "@angular/core";

declare const generateRandomNumbers: any;

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: [
        './product.component.css'
    ]
})

export class ProductComponent{
    randomNumbers = <[]>generateRandomNumbers()
        .filter((a: number) => a < 2000)
        .sort((a: number, b: number) => a - b);
    page: number = 1;
    itemsToDisplay: number = 10;

    @Input()
    parent_title: string = "";

    pageChanged(event: any){
        this.page = event;
    }
}