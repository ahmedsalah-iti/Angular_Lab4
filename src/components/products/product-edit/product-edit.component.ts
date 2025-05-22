import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { StaticProductServiceService } from '../../../app/services/static-product-service.service';
import { IProduct } from '../../../app/models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-product-edit',
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent implements OnInit {
  currentProduct!:IProduct;
constructor(private productService:StaticProductServiceService,private activateRoute:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    let productId = Number(this.activateRoute.snapshot.paramMap.get('id'));
    let currentProduct = this.productService.getProductById(productId)
    if(currentProduct){
      this.currentProduct = currentProduct;
    }
  }
editHandler(){
  this.productService.updateProduct(this.currentProduct);
  this.router.navigate(['/products',this.currentProduct.id])
  
}
getCategories(){
  return this.productService.getAllCategories();
}
}
