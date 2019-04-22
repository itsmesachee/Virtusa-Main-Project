import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ProductOrders } from "../models/product-orders.model";
import { ProductOrder } from "../models/product-order.model";
import { EcommerceService } from "src/app/service/EcommerceService";
import { Subscription } from "rxjs/internal/Subscription";

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
    orderFinished: boolean;
    orders: ProductOrders;
    total: number;
    timeout: boolean = false;

    sub: Subscription;

    @Output() onOrderFinished: EventEmitter<boolean>;

    constructor(private ecommerceService: EcommerceService) {
        this.total = 0;
        this.orderFinished = false;
        this.onOrderFinished = new EventEmitter<boolean>();

        const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;

        let countDown = new Date('Apr 20, 2019 12:04:30').getTime(),
            x = setInterval(function () {

                let now = new Date().getTime(),
                    distance = countDown - now;

                document.getElementById('days').innerText = ("0" + Math.floor(distance / (day))).slice(-2).toString(),
                    document.getElementById('hours').innerText = ("0" + Math.floor((distance % (day)) / (hour))).slice(-2).toString(),
                    document.getElementById('minutes').innerText = ("0" + Math.floor((distance % (hour)) / (minute))).slice(-2).toString(),
                    document.getElementById('seconds').innerText = ("0" + Math.floor((distance % (minute)) / second)).slice(-2).toString();

                if (distance < 0) {
                    this.timeout = true;
                    clearInterval(x);
                    document.getElementById("time").innerHTML = "";
                }

            }, second)
    }

    ngOnInit() {
        this.orders = new ProductOrders();
        this.loadCart();
        this.loadTotal();


    }

    private calculateTotal(products: ProductOrder[]): number {
        let sum = 0;
        products.forEach(value => {
            sum += (value.product.productPrice * value.quantity);
        });
        return sum;
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    finishOrder() {
        this.orderFinished = true;
        this.ecommerceService.Total = this.total;
        this.onOrderFinished.emit(this.orderFinished);
    }

    loadTotal() {
        this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
            this.total = this.calculateTotal(this.orders.productOrders);
        });
    }

    loadCart() {
        this.sub = this.ecommerceService.ProductOrderChanged.subscribe(() => {
            let productOrder = this.ecommerceService.SelectedProductOrder;
            if (productOrder) {
                this.orders.productOrders.push(new ProductOrder(
                    productOrder.product, productOrder.quantity));
            }
            this.ecommerceService.ProductOrders = this.orders;
            this.orders = this.ecommerceService.ProductOrders;
            this.total = this.calculateTotal(this.orders.productOrders);
        });
    }

    reset() {
        this.orderFinished = false;
        this.orders = new ProductOrders();
        this.orders.productOrders = []
        this.loadTotal();
        this.total = 0;
    }
}
