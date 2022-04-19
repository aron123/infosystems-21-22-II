import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../models/Category';
import { User } from '../models/User';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  productForm = this.formBuilder.group({
    id: [null],
    title: ['', [Validators.required, Validators.minLength(5)]],
    description: [''],
    price: [0, Validators.min(0)],
    imgUrl: ['https://skillz4kidzmartialarts.com/wp-content/uploads/2017/04/default-image.jpg', Validators.pattern(/^(http|https):\/\//)],
    brand: [''],
    uploader: [],
    categories: [[]]
  });

  categories!: Category[];
  users!: User[];

  successMessage = '';
  errorMessage = '';

  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService) { }

  get title() {
    return this.productForm.controls['title'];
  }

  get price() {
    return this.productForm.controls['price'];
  }

  get imgUrl() {
    return this.productForm.controls['imgUrl'];
  }

  async ngOnInit() {
    try {
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id) {
        const product = await this.productService.getProduct(parseInt(id));
        this.productForm.setValue(product);
      }

      this.categories = await this.productService.getCategories();
      this.users = await this.productService.getUsers();
    } catch (err) {
      console.error(err);
    }
  }

  async saveProduct() {
    this.successMessage = '';
    this.errorMessage = '';

    try {
      if (this.productForm.value.id) {
        await this.productService.updateProduct(this.productForm.value);
      } else {
        await this.productService.createProduct(this.productForm.value);
      }

      this.successMessage = 'Changes saved successfully.';
    } catch (err: any) {
      this.errorMessage = err.error.message;
    }
  }

  compareCategories(cat1: Category, cat2: Category) {
    return cat1 && cat2 && cat1.id === cat2.id;
  }

  compareUsers(user1: User, user2: User) {
    return user1 && user2 && user1.id === user2.id;
  }

}
