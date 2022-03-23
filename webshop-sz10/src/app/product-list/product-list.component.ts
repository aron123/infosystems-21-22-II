import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: Product[];

  constructor(private productService: ProductService) { }

  async ngOnInit() {
    try {
      this.products = await this.productService.getProducts();
      console.log(this.products);
    } catch (err) {
      console.error(err);
    }
  }

}
