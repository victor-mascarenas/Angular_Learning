import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

interface JSP {
    userID: string,
    id: string,
    title: string,
    completed: boolean
}

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: [
        './product.component.css'
    ]
})

export class ProductComponent implements OnInit{
    public todos: JSP[];

    constructor(private httpClient: HttpClient, private route: ActivatedRoute){
        this.todos = [];
    }

    ngOnInit(): void {
        this.httpClient.get<JSP[]>("https://jsonplaceholder.typicode.com/todos")
            .subscribe(results => this.todos = results);
        this.route.params.subscribe(params => console.log(params));
    }
}