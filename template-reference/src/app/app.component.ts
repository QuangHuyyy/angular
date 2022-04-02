import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'template-reference';
  @ViewChild('txtName') name: ElementRef | undefined;

  getData(value: HTMLInputElement) {
    console.log(value.value)
  }

  getDataComp() {
    console.log(this.name?.nativeElement.value);
  }
}
