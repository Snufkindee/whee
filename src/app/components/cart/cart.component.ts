import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  public cartList = [];
  private subscription: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.subscription = this.cartService.getCartState().subscribe((state) => {
      this.cartList = state.products;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  closeNav(): void {
    document.getElementById('mySidenav').style.width = '0';
  }

  calcTotal(): number {
    let total = 0;
    for (let product of this.cartList) {
      total += product.qty * product.price;
    }

    return total;
  }
}
