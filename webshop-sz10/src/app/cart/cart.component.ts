import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../models/Cart';
import { CartItem } from '../models/CartItem';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cart!: Cart;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  changeItem(cartItem: CartItem) {
    let item = this.cart.cartItems.find((item) => cartItem.id === item.id);
    item = cartItem;
  }

}
