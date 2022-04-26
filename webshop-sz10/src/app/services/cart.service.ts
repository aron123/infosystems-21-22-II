import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Cart } from '../models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCarts() {
    return lastValueFrom(this.http.get<Cart[]>('/api/carts'));
  }

  createCart(cart: Cart) {
    return lastValueFrom(this.http.post<Cart>('/api/carts', cart));
  }
}
