import { Component } from '@angular/core';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learn-router';
  constructor(private routerService: Router) {
  }
  navigate(url: string) {
    this.routerService.navigate([url]);
  }
}
