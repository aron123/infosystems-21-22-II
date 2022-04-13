import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  productForm = this.formBuilder.group({
    id: [0],
    title: ['',  Validators.required],
    description: [''],
    price: [0, Validators.min(0)],
    imgUrl: ['https://skillz4kidzmartialarts.com/wp-content/uploads/2017/04/default-image.jpg', Validators.pattern(/^(http|https):\/\//)],
    brand: ['']
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
