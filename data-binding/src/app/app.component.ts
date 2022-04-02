import { Component } from '@angular/core';
import { Product } from './common/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'data-binding';
  isDisable = false;

  user = {
    firstName: 'Vu Quang',
    lastName: 'Huy',
  };
  name = this.user.firstName + ' - ' + this.user.lastName;

  clearValue() {
    this.name = '';
  }

  products: Product[] = [
    {
      name: 'Laptop',
      quantity: 12,
      price: 1000,
    },
    {
      name: 'Iphone',
      quantity: 19,
      price: 500,
    },
  ];
}
