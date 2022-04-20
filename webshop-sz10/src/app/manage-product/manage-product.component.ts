import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../models/Category';
import { User } from '../models/User';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';

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
    uploader: [null],
    categories: [[]]
  });

  successMessage = '';
  errorMessage = '';

  users!: User[];
  categories!: Category[];

  constructor(private formBuilder: FormBuilder,
    private productService: ProductService,
    private userService: UserService,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    try {
      this.users = await this.userService.getAll();
      this.categories = await this.categoryService.getAll();

      const id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id) {
        const product = await this.productService.getProduct(parseInt(id));
        this.productForm.setValue(product);
      }
    } catch (err) {
      console.error(err);
    }
  }

  get title() {
    return this.productForm.controls['title'];
  }

  get price() {
    return this.productForm.controls['price'];
  }

  get imgUrl() {
    return this.productForm.controls['imgUrl'];
  }

  async saveProduct() {
    this.successMessage = '';
    this.errorMessage = '';


    try {
      const product = this.productForm.value;
      if (product.id) {
        await this.productService.updateProduct(product);
        this.successMessage = 'Successfully updated product.';
      } else {
        const productInserted = await this.productService.createProduct(this.productForm.value);
        this.successMessage = 'Product created with id ' + productInserted.id;
      }
    } catch (err: any) {
      this.errorMessage = err.error.message;
    }
  }

  compareUsers(user1: User, user2: User) {
    return user1 && user2 && user1.id === user2.id;
  }

  compareCategories(cat1: Category, cat2: Category) {
    return cat1 && cat2 && cat1.id === cat2.id;
  }

}
