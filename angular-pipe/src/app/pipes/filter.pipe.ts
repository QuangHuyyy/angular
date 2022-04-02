import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../common/product";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: Product[], id: number | undefined, name: string, price: number | undefined, status: boolean | undefined): Product[] {
    if(!id && !name && !price && !status){
      return products;
    }else {
      if(id){
        products = products.filter(p => {
          return p.id.toString().indexOf(id.toString()) != -1;
        });
      }
      if(name){
        products = products.filter(p => {
          return p.name.toLowerCase().indexOf(name.toLowerCase()) != -1;
        })
      }
      if(price){
        products = products.filter(p => {
          return p.price.toString().indexOf(price.toString()) != -1;
        });
      }
      if(status){
        products = products.filter(p => {
          return (p.status + "").toString().toLowerCase() === (status + "").toLowerCase();
        })
      }
      return products;
    }

  }

}
