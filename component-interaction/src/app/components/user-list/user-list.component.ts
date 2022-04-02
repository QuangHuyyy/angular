import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../common/user";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input('users') users: User[] = [];
  constructor() { }

  ngOnInit(): void {
  }
}
