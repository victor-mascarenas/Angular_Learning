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
    departments = ["Mountain Bycicles", "Road Bycicles", "Hybrid Bycicles", "Bycicle Pumps"];
    employees = [
        {
            name: 'Axle',
            id: '1234',
            department: 'IT'
        },
        {
            name: 'Jean',
            id: '1235',
            department: 'Finance'
        },
        {
            name: 'Barb',
            id: '1236',
            department: 'IT'
        }
    ];
}