import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/Cart';
import { CartItem } from '../models/CartItem';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart!: Cart;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.initializeCart();
    this.cartService.productAdded$.subscribe(product => {
      if (this.cart) {
        this.cart.cartItems.push({
          amount: 1,
          product
        });
      }
    })
  }

  get cartTotal(): number {
    if (!this.cart) {
      return 0;
    }

    let sum = 0;
    this.cart.cartItems.forEach(cartItem => {
      sum += cartItem.amount * cartItem.product.price;
    });
    return sum;
  }

  initializeCart() {
    this.cart = {
      id: null,
      user: null,
      cartItems: []
    };
  }

  changeItem(cartItem: CartItem) {
    let item = this.cart.cartItems.find((item) => cartItem.id === item.id);
    item = cartItem;
  }

  async saveCart() {
    try {
      await this.cartService.createCart(this.cart);
      console.log('success');
    } catch (err) {
      console.error(err);
    }
  }

}
