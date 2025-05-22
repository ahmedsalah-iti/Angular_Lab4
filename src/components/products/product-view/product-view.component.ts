import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StaticProductServiceService } from '../../../app/services/static-product-service.service';
import { IProduct } from '../../../app/models/iproduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-view',
  imports: [CommonModule,RouterLink],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent implements OnInit{
  productId?:number;
  product?:IProduct;
  constructor(private activatedRoute:ActivatedRoute,private productService:StaticProductServiceService){}
  ngOnInit(): void {
    this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(this.productId);
  }
}
