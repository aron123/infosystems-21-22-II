import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Subject } from 'rxjs';
import { Cart } from '../models/Cart';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private productAddedSource = new Subject<Product>();

  productAdded$ = this.productAddedSource.asObservable();

  constructor(private http: HttpClient) { }

  addProductToCart(product: Product) {
    this.productAddedSource.next(product);
  }

  getCarts() {
    return lastValueFrom(this.http.get<Cart[]>('/api/carts'));
  }

  createCart(cart: Cart) {
    return lastValueFrom(this.http.post<Cart>('/api/carts', cart));
  }
}
