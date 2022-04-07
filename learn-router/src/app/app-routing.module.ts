import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {ContactComponent} from "./components/contact/contact.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {ProductListComponent} from "./components/product/product-list/product-list.component";
import {ProductDetailComponent} from "./components/product/product-detail/product-detail.component";

const routes: Routes = [
  { path: "", redirectTo: "/index", pathMatch: "full" },
  { path: "index", component: HomeComponent },
  { path: "products", component: ProductListComponent },
  { path: "products/:id", component: ProductDetailComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], exports: [RouterModule]
})
export class AppRoutingModule {
}
