import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../models/category.model';
import { User } from '../models/user.model';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  successMessage = '';
  errorMessage = '';

  users!: User[];
  categories!: Category[];

  productForm = this.formBuilder.group({
    id: [0],
    title: ['', Validators.required],
    description: [''],
    price: [0, Validators.min(0)],
    imgUrl: ['https://skillz4kidzmartialarts.com/wp-content/uploads/2017/04/default-image.jpg', Validators.pattern(/^(http|https):\/\//)],
    brand: [''],
    uploader: [null],
    categories: [[]]
  });

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

  async createProduct() {
    this.errorMessage = '';
    this.successMessage = '';
    const product = this.productForm.value;

    try {

      if (product.id) {
        await this.productService.updateProduct(product);
        this.successMessage = 'Product updated successfully.';
      } else {
        const insertedProduct = await this.productService.createProduct(product);
        this.successMessage = 'Product is inserted with id ' + insertedProduct.id;
      }
    } catch (err: any) {
      this.errorMessage = err.error.message;
    }
  }

}
