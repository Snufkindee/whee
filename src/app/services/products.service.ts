import { Injectable } from '@angular/core';
import * as data from '../../store/products.json';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: Product[] = (data as any).default;

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
}
