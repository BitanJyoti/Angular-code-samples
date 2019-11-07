import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { CustomValidator } from '../custom.validator';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor() { }
  get name(){
    return this.ProductForm.get('name');
  }
  getimage(){
    return this.ProductForm.get('image');

  }
  get price(){
    return this.ProductForm.get('price');
  }

  ProductForm = new FormGroup({
  name : new FormControl('',[Validators.required,Validators.minLength(3)]),
  image : new FormControl('',[Validators.required,Validators.minLength(8),CustomValidator.noSpace]),
  price : new FormControl('',[Validators.required,Validators.min(1000),Validators.max(9999)])
});


  submitForm(ProductForm: NgForm){
    console.log(ProductForm.value);
    ProductForm.reset();
  }
  ngOnInit() {
  }

}
