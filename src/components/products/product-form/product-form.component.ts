import { Component } from '@angular/core';
import { StaticProductServiceService } from '../../../app/services/static-product-service.service';
import { IProduct } from '../../../app/models/iproduct';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
constructor(private productService:StaticProductServiceService,private router:Router){}

newProductName!:string;
newProductPrice!:number;
newProductStock!:number;
newProductCategory!:string;
formErrors!:string[];
showFormErrors():string[]{
  if (!this.formErrors){
    return [];
  }
  return this.formErrors;
}
addProductHandler(){
  this.formErrors = [];
  if(!this.newProductName){this.formErrors.push("missing name");}
  if(!this.newProductPrice){this.formErrors.push("missing Price");}
  if(!this.newProductStock){this.formErrors.push("missing Stock");}
  if (this.formErrors.length > 0) {return;}
  let newProduct:IProduct = {
    id:0,
    name:this.newProductName,
    price:this.newProductPrice,
    stock:this.newProductStock,
    category:this.newProductCategory
  }
  console.log("newP",newProduct)
  this.productService.addProduct(newProduct);
  this.router.navigate(['/products'])
}
}
