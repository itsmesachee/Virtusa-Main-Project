import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { ViewProductComponent } from './view-product/view-product.component';
import { OrdersComponent } from './ecommerce/orders/orders.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomescreenComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'products', component: EcommerceComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
  { path: 'admin/view/:id', component: ViewProductComponent, pathMatch: 'full' },
  { path: 'cart', component: OrdersComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
