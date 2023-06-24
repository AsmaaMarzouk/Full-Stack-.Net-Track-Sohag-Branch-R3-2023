import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { ProductParentComponent } from './Components/product-parent/product-parent.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { UserTemplateFormComponent } from './Components/User/user-template-form/user-template-form.component';
import { UserReactiveFormComponent } from './Components/User/user-reactive-form/user-reactive-form.component';
// first match wins
const routes: Routes = [
  // {path:'',component:MainComponent},// default path
  {path:'',redirectTo:'/Home',pathMatch:'full'},// default path
  { path: 'Home', component: MainComponent, title: 'Home Page' },
  {
    path: 'Products',
    component: ProductsListComponent,
    title: 'Products List Page',
  },
  {
    path: 'ProductsParent',
    component: ProductParentComponent,
    title: 'Products Parent Page',
  },
  { path: 'AboutUs', component: AboutusComponent, title: 'About Page' },
  {path:'prd/:productID',component:ProductDetailsComponent,title:'Product details page'},
  {path:'templateForm',component:UserTemplateFormComponent,title:'Template Form'},
  {path:'reactiveForm',component:UserReactiveFormComponent,title:'Reactive Form'},
  {path:'**',component:NotFoundPageComponent,title:'Not Found Page'},// wildcard path => not found page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
