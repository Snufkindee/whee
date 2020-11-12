import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss'],
})
export class CartProductComponent implements OnInit {
  @Input() product;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    console.log('asd', this.product);
  }

  reduceProduct(product) {
    this.cartService.removeProduct(product);
  }

  addProduct(product) {
    this.cartService.addProduct(product);
  }
}
