import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductServiceService {
  categories: string[] = [
    "Books",
    "Pens",
    "Watches"
  ];
  productsList: IProduct[] = []
  constructor() {
    this.productsList = [
      { id: 1, name: "Book", price: 123, stock: 12, category: "Books" },
      { id: 2, name: "Pen", price: 333, stock: 2, category: "Pens" },
      { id: 3, name: "Watch", price: 5, stock: 1, category: "Watches" },
    ]
  }
  getAllProducts(): IProduct[] {
    return this.productsList;
  }
  getAllCategories(): string[] {
    return this.categories;
  }
  getProductById(id: number):IProduct | undefined {
    return this.productsList.find(product => {
      return product.id == id
    })
  }
  getLastId(): number {

    if (Array.isArray(this.productsList) && this.productsList.length > 0) {
      return this.productsList.reduce((acc, cur) => {
        const accId = acc.id || 0;
        const curId = cur.id || 0;

        return curId > accId ? cur : acc
      }).id || 0
    } else {
      return 0;
    }


  }
  getNextId(): number {
    return this.getLastId() + 1;
  }
  addProduct(newProductFromForm:IProduct): number {
    let nextId = this.getNextId();
    let newProduct: IProduct = {...newProductFromForm,id:nextId}
    this.productsList.push(newProduct);
    return nextId;
  }
  deleteProduct(id: number): void {
    this.productsList = this.productsList.filter(product => {
      return product.id != id
    })

  }
  updateProduct(updatedProduct: IProduct) {
    let targetedProduct = this.getProductById(updatedProduct.id);
    if (targetedProduct) {
      this.productsList.map((product) => {
        if (product.id == targetedProduct.id) {
          return { ...targetedProduct }
        }
        return product;
      })
    }
  }

}
