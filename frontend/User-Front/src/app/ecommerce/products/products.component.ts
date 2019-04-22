import {Component, OnInit} from '@angular/core';
import {ProductOrder} from "../models/product-order.model";
import {EcommerceService} from "src/app/service/EcommerceService";
import {Subscription} from "rxjs/internal/Subscription";
import {ProductOrders} from "../models/product-orders.model";
import {Product} from "../models/product.model";
import * as $ from 'jquery';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    
    productOrders: ProductOrder[] = [];
    products: Product[] = [];
    selectedProductOrder: ProductOrder;
    private shoppingCartOrders: ProductOrders;
    sub: Subscription;
    productSelected: boolean = false;

    constructor(private ecommerceService: EcommerceService) {
    }

    ngOnInit() {

        $(document).ready(function(){
            var $btns = $('.btn').click(function() {
                if (this.id == 'all') {
                  $('#parent > div').fadeIn(450);
                } else {
                  var $el = $('.' + this.id).fadeIn(450);
                  $('#parent > div').not($el).hide();
                }
                $btns.removeClass('active');
                $(this).addClass('active');
              })

              $(window).scroll(function () {   
   
                if($(window).scrollTop() > 200) {
                   $('#sidebar').css('position','fixed');
                   $('#sidebar').css('top','0'); 
                }
               
                else if ($(window).scrollTop() <= 200) {
                   $('#sidebar').css('position','');
                   $('#sidebar').css('top','');
                }  
                   if ($('#sidebar').offset().top + $("#sidebar").height() > $("#footer").offset().top) {
                       $('#sidebar').css('top',-($("#sidebar").offset().top + $("#sidebar").height() - $("#footer").offset().top));
                   }
               });
        })

        this.productOrders = [];
        this.loadProducts();
        this.loadOrders();
    }

    addToCart(order: ProductOrder) {
        this.ecommerceService.SelectedProductOrder = order;
        this.selectedProductOrder = this.ecommerceService.SelectedProductOrder;
        this.productSelected = true;
    }

    removeFromCart(productOrder: ProductOrder) {
        let index = this.getProductIndex(productOrder.product);
        if (index > -1) {
            this.shoppingCartOrders.productOrders.splice(
                this.getProductIndex(productOrder.product), 1);
        }
        this.ecommerceService.ProductOrders = this.shoppingCartOrders;
        this.shoppingCartOrders = this.ecommerceService.ProductOrders;
        this.productSelected = false;
    }

    getProductIndex(product: Product): number {
        return this.ecommerceService.ProductOrders.productOrders.findIndex(
            value => value.product === product);
    }

    isProductSelected(product: Product): boolean {
        return this.getProductIndex(product) > -1;
    }

    loadProducts() {
        this.ecommerceService.getAllProducts()
            .subscribe(
                (products: any[]) => {
                    this.products = products;
                    this.products.forEach(product => {
                        this.productOrders.push(new ProductOrder(product, 0));
                    })
                },
                (error) => console.log(error)
            );
    }

    loadOrders() {
        this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
            this.shoppingCartOrders = this.ecommerceService.ProductOrders;
        });
    }

    reset() {
        this.productOrders = [];
        this.loadProducts();
        this.ecommerceService.ProductOrders.productOrders = [];
        this.loadOrders();
        this.productSelected = false;
    }
}
