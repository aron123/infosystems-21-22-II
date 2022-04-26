import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cart } from '../models/Cart';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: Product[];

  query: string = '';

  constructor(private productService: ProductService,
    private cartService: CartService) { }

  async ngOnInit() {
    try {
      this.products = await this.productService.getProducts();
    } catch (err) {
      console.error(err);
    }
  }

  async search() {
    try {
      this.products = await this.productService.searchProducts(this.query);
    } catch (err) {
      console.error(err);
    }
  }

  addClicked(product: Product) {
    this.cartService.addProductToCart(product);
  }

}
