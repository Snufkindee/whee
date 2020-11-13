import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart-button',
  templateUrl: './shopping-cart-button.component.html',
  styleUrls: ['./shopping-cart-button.component.scss'],
})
export class ShoppingCartButtonComponent implements OnInit {
  constructor(public cartService: CartService) {}

  ngOnInit(): void {}

  openNav(): void {
    document.getElementById('mySidenav').style.width = '100%';
  }
}
