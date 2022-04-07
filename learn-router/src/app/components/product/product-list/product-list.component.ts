import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../../../models/product.model";
import {ProductService} from "../../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  name!: string;
  price!: number;
  private subscription!: Subscription;

  products: Product[] | undefined;

  constructor(private _productService: ProductService, private _router: Router,
              private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.subscription = this._activatedRoute.queryParams.subscribe(data => {
      let name = data['name'];
      let price = data['price'];
      this.products = this._productService.getAllProducts(name, price);
    })
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
  onSearch() {
    this._router.navigate(['products'], {
      queryParams: {
        name: this.name ? this.name : "",
        price: this.price ? this.price : ""
      }
    });

  }

}
