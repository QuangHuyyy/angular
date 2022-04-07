import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../../../models/product.model";
import {ProductService} from "../../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product: Product | undefined;
  subscription: Subscription | undefined;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.handelParamRouteBySnapshot();
    this.handelParamRouteByParams();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  handelParamRouteBySnapshot(){
    // Khong ap dung khi chuyen trang tren cung 1 router (VD: đang ở /products/1 không thể chuyển sang /products/2)

    let id: number = this.activatedRoute.snapshot.params['id'];
    this.product = this.productService.getProductById(id);
  }

  handelParamRouteByParams(){
    this.subscription = this.activatedRoute.params.subscribe(data => {
      let id: number = data['id'];
      this.product = this.productService.getProductById(id);
    })
  }


}
