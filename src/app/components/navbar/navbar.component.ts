import { Component, OnInit } from '@angular/core';
import * as data from '../../../store/products.json';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  private products: any = (data as any).default;

  constructor() {}

  ngOnInit(): void {
    let stuff;
    for (let asd of this.products) {
      if (asd.name === 'Circle') {
        stuff = asd.name;
      }
    }
    console.log(stuff);
  }
}
