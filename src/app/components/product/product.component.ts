import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() public product;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart(product) {
    this.cartService.addProduct(product);
  }
}
