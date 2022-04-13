import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  productForm = this.formBuilder.group({
    id: [null],
    title: ['', Validators.required, Validators.minLength(5)],
    description: [''],
    price: [0, Validators.min(0)],
    imgUrl: ['https://skillz4kidzmartialarts.com/wp-content/uploads/2017/04/default-image.jpg', Validators.pattern(/^(http|https):\/\//)],
    brand: ['']
  });

  constructor(private formBuilder: FormBuilder,
    private productService: ProductService) { }

  ngOnInit(): void {
  }

  async saveProduct() {
    try {
      const product = await this.productService.createProduct(this.productForm.value);
    } catch (err) {
      console.error(err);
    }
  }

}
