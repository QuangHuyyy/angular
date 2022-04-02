import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../common/user";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  // @Input('formName') formName: string = '';
  @Output('insertUser') onInsert: EventEmitter<User> = new EventEmitter<User>();
  private _formName: string = "";

  id: number = 0;
  name: string = " ";
  age: number = 0;
  // gender: boolean = false;
  address: string = " ";

  constructor() { }

  ngOnInit(): void {
  }


  get formName(): string {
    return this._formName;
  }

  @Input()
  set formName(formName: string) {
    this._formName = formName;
  }


  onSubmit() {
    let newUser: User = {
      id: this.id,
      name: this.name,
      age: this.age,
      // gender: this.gender,
      address: this.address
    }
    console.log(newUser);
    this.onInsert.emit(newUser);
  }
}
