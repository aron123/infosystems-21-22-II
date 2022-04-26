import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '../models/CartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem!: CartItem;

  @Output() amountChanged = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit(): void {
  }

  get sum () {
    return this.cartItem.amount * this.cartItem.product.price;
  }

  onDecrement() {
    this.cartItem.amount--;
    this.amountChanged.emit(this.cartItem);
  }

  onIncrement() {
    this.cartItem.amount++;
    this.amountChanged.emit(this.cartItem);
  }

}
