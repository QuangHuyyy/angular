import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {FormsModule} from "@angular/forms";
import {StarComponent} from './components/star/star.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: 'product-list', component: ProductListComponent},
  {path: 'product-detail', component: ProductDetailComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
