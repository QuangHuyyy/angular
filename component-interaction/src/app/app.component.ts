import { Component } from '@angular/core';
import {User} from "./common/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: User[] = [
    {
      id: 1,
      name: "Quang Huy",
      age: 22,
      // gender: true,
      address: 'Name Dinh City'
    },
    {
      id: 2,
      name: "Thi Thuy",
      age: 26,
      // gender: false,
      address: 'Name Dinh City'
    },
    {
      id: 3,
      name: "Xuan Long",
      age: 9,
      // gender: true,
      address: 'Name Dinh City'
    },

  ]
  userFromChild: User | undefined;
  formName: string = "Insert new user"

  title = 'component-interaction';

  handelInsert(user: User) {
    this.userFromChild = {
      id: user.id,
      name: user.name,
      age: user.age,
      address: user.address
    }
  }
}
