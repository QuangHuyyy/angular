import {Component, OnInit} from '@angular/core';
import {Product} from "../../common/product";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor() {
    this.product = new Product("", "");
  }

  ngOnInit(): void {
  }

  changeDetail(form: NgForm) {
    console.log(form.value);
    this.product.productCode = form.value.productCode.toUpperCase();
  }
}
