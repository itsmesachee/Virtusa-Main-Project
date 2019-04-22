import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SignupComponent } from './signup/signup.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LogoutComponent } from './logout/logout.component';

import { ApiService } from "./core/api.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { TokenInterceptor } from "./core/interceptor";
import { OrdersComponent } from './ecommerce/orders/orders.component';
import { ProductsComponent } from './ecommerce/products/products.component';
import { ShoppingCartComponent } from './ecommerce/shopping-cart/shopping-cart.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ViewProductComponent } from './view-product/view-product.component';

import { EcommerceService } from "src/app/service/EcommerceService";

@NgModule({
  declarations: [
    AppComponent,
    HomescreenComponent,
    HeaderComponent,
    FooterComponent,
    ContactusComponent,
    SignupComponent,
    AboutusComponent,
    LogoutComponent,
    OrdersComponent,
    ProductsComponent,
    ShoppingCartComponent,
    EcommerceComponent,
    ViewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService, EcommerceService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
