import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartList = [];
  private cartListQty = 0;

  private cartSubject = new Subject<any>();
  private $cartState = this.cartSubject.asObservable();

  constructor() {}

  addProduct(product) {
    for (let existing of this.cartList) {
      if (existing.id === product.id) {
        existing.qty++;
        this.cartListQty++;
        return;
      }
    }

    this.cartListQty++;
    this.cartList.push({ ...product, qty: 1 });
    this.cartSubject.next({ products: this.cartList });
  }

  removeProduct(product) {
    for (let existing of this.cartList) {
      if (existing.id === product.id) {
        existing.qty--;
        this.cartListQty--;
      }

      this.cartList = this.cartList.filter((item) => item.qty > 0);
      this.cartSubject.next({ products: this.cartList });
    }
  }

  getCartState() {
    return this.$cartState;
  }

  getCartTotalAmount() {
    return this.cartListQty;
  }
}
