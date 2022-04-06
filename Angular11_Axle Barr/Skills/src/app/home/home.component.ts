import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  /* template: `
    <p>home works!</p>
    <h3>Hello</h3>
  `, */
  templateUrl: './home.component.html',
  /* styles: [
    'div#demo {color: red;}',
    'div#demo {border-style: solid;}',
    'div#demo {border-color: grey;}',
    'div#demo {width: 200px;}',
    'div#demo {height: 40px;}',
  ], */
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
