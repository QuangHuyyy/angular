import {Component} from '@angular/core';
import {Product} from "./common/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pipe';
  content: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  name: string = "Vũ Quang Huy";
  amount: number = 12.4535237426;
  result: number = 0.2126276287;
  total: number = 276372.224324
  today: Date = new Date();

  product: Product = {id: 1, name: "Iphone 12", price: 12, status: true};

  products: Product[] = [
    {id: 1, name: "Iphone 12", price: 128, status: true},
    {id: 2, name: "Samsung galaxy note 8", price: 231, status: true},
    {id: 3, name: "Xiaomi note 7", price: 623, status: false},
    {id: 4, name: "Iphone Xs max", price: 247, status: false},
    {id: 5, name: "Nokia 9", price: 937, status: true},
    {id: 6, name: "Lenovo legion 5", price: 223, status: true},
    {id: 12, name: "Samsung tab s8", price: 847, status: false},
  ];

  idFilter: number | undefined;
  nameFilter: string = "";
  priceFilter: number | undefined;
  statusFilter: boolean | undefined;

  numbers: number[] = [1, 4, 2, 5, 9, 7, 3, 2];
  sortValue: number = 1;

  handelSortNumber(value: number) {
    this.sortValue = value;
  }

  sortCol: string = '';
  sortType: number | undefined;
  handelSort(col: string) {
    this.sortCol = col;
    // @ts-ignore
    this.sortType = -this.sortType || 1;
  }
}
