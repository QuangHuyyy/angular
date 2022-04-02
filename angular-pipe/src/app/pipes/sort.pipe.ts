import {Pipe, PipeTransform} from '@angular/core';
import {Product} from "../common/product";
import {orderBy} from "lodash";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(products: Product[], col?: string, type?: number): Product[] {
    if (!col && !type) {
      return products
    } else {
      if (col?.toString().toLowerCase() === "id") {
        products = products.sort((a, b) => {
          // @ts-ignore
          return type * (a.id - b.id);
        })
      }
      if (col?.toString().toLowerCase() === "name") {
        products = products.sort((a, b) => {
          // @ts-ignore
          return type * (a.name.localeCompare(b.name));
        })
      }
      if (col?.toString().toLowerCase() === "price") {
        // products = products.sort((a, b) => {
        //   // @ts-ignore
        //   return type * (a.price - b.price);
        // })

        // @ts-ignore
        products = orderBy(products, [col?.toLowerCase()], [type == 1 ? 'asc' : "desc"])
      }
      if (col?.toString().toLowerCase() === "status") {
        console.log("status")
        products = products.sort((a, b) => {
          // @ts-ignore
          return type * (Number(a.status) - Number(b.status));
        })
      }
      return products;
    }

  }

}
