import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductOrders } from "../models/product-orders.model";
import { Subscription } from "rxjs/internal/Subscription";
import { EcommerceService } from "src/app/service/EcommerceService";
import { Router } from '@angular/router';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

    orders: ProductOrders;
    total: number;
    net: number;
    paid: boolean;
    sub: Subscription;
    payClick: boolean;
    coupon: string = "SUMMER35";
    code: string = "";
    applied: boolean = false;
    wrongCoupon: boolean = false;

    public payuform: any = {};
    disablePaymentButton: boolean = true;

    constructor(private ecommerceService: EcommerceService, private http: HttpClient, private router: Router) {
        this.orders = this.ecommerceService.ProductOrders;
    }

    ngOnInit() {
        this.paid = false;
        this.payClick = false;
        this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
            this.orders = this.ecommerceService.ProductOrders;
        });
        this.loadTotal();
    }

    pay() {

        this.payClick = true;
        this.payuform.amount = this.net.toFixed(2);
    }

    loadTotal() {
        this.sub = this.ecommerceService.TotalChanged.subscribe(() => {
            this.total = this.ecommerceService.Total;

            this.net = this.total * 1.18;
        });
    }

    onCoupon() {
        if (this.code == this.coupon) {
            this.net = this.net - 0.35 * this.net;
            this.applied = true;
            this.wrongCoupon = false;
            this.payuform.amount = this.net.toFixed(2);
        } else {
            this.wrongCoupon = true;
            this.code = "";
        }
    }

    confirmPayment() {
        const paymentPayload = {
            email: this.payuform.email,
            name: this.payuform.firstname,
            phone: this.payuform.phone,
            productInfo: this.payuform.productinfo,
            amount: this.payuform.amount
        }
        return this.http.post<any>('http://localhost:8888/payment/payment-details', paymentPayload).subscribe(
            data => {
                console.log(data);
                this.payuform.txnid = data.txnId;
                this.payuform.surl = data.sUrl;
                this.payuform.furl = data.fUrl;
                this.payuform.key = data.key;
                this.payuform.hash = data.hash;
                this.payuform.txnid = data.txnId;
                this.disablePaymentButton = false;
                this.paid = true;
                this.ecommerceService.saveOrder(this.orders).subscribe();
            }, error1 => {
                console.log(error1);
            })
    }
}
