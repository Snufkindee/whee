import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() public product: Product;
  @Input() public isCart: boolean;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart(product): void {
    this.cartService.addProduct(product);
  }

  removeProduct(product): void {
    this.cartService.removeProduct(product);
  }
}
