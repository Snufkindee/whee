import { Injectable } from '@angular/core';
import * as data from '../../store/products.json';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public products: any = (data as any).default;

  constructor() {}

  getProductById(id: number) {
    for (let product of this.products) {
      if (product.id === id) {
        return product;
      }
    }
  }

  getProductByName(name: string) {
    for (let product of this.products) {
      if (product.name === name) {
        return product;
      }
    }
  }

  getProducts() {
    return this.products;
  }
}
