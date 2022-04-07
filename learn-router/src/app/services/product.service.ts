import {Injectable} from '@angular/core';
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: "Iphone 12", price: 12500000, status: true},
    { id: 2, name: "Samsung galaxy note 10", price: 31299000, status: true},
    { id: 3, name: "Lenovo 9", price: 6500000, status: false},
    { id: 4, name: "Xiaomi redmi note 7", price: 4500000, status: true}
  ]
  constructor() { }

  public getAllProducts(name?: string, price?: number): Product[]{
    let result = this.products;
    if(name){
      result = this.products.filter(p => {
        return p.name.toLowerCase().indexOf(name.toLowerCase()) != -1;
      })
    }
    if(price){
      result = this.products.filter(p => {
        return p.price == price
      })
    }
    return result;
  }
  public getProductById(id: number): Product | undefined{
    return this.products.find(p => p.id == id);
  }
}
