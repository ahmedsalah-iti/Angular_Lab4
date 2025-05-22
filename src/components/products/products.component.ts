import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StaticProductServiceService } from '../../app/services/static-product-service.service';
import { IProduct } from '../../app/models/iproduct';

@Component({
  selector: 'app-products',
  imports: [CommonModule,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products!:IProduct[];
  constructor (private productService:StaticProductServiceService){}
  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }
  deleteHandler(id:number){
    console.log("deleting",id,"...");
    console.log("remaining Products:\n",this.productService.deleteProduct(id))
    this.products = this.productService.getAllProducts();
  }

}
