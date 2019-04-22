import { ProductOrder } from "../ecommerce/models/product-order.model";
import { Subject } from "rxjs/internal/Subject";
import { ProductOrders } from "../ecommerce/models/product-orders.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
};

@Injectable()
export class EcommerceService {

    private productsUrl = "/server/api/product";
    private ordersUrl = "/server/api/orders";

    private productOrder: ProductOrder;
    private orders: ProductOrders = new ProductOrders();

    private productOrderSubject = new Subject();
    private ordersSubject = new Subject();
    private totalSubject = new Subject();

    private total: number;

    ProductOrderChanged = this.productOrderSubject.asObservable();
    OrdersChanged = this.ordersSubject.asObservable();
    TotalChanged = this.totalSubject.asObservable();

    constructor(private http: HttpClient) {
    }

    getAllProducts() {
        return this.http.get(this.productsUrl);
    }

    saveOrder(order: ProductOrders) {
        return this.http.post(this.ordersUrl, order);
    }

    getProduct(id: number) {
        return this.http.get(this.productsUrl + '/' + id);
    }

    createProductsRegistration(products) {
        let body = JSON.stringify(products);
        return this.http.post(this.productsUrl, body, httpOptions);
    }

    set SelectedProductOrder(value: ProductOrder) {
        this.productOrder = value;
        this.productOrderSubject.next();
    }

    get SelectedProductOrder() {
        return this.productOrder;
    }

    set ProductOrders(value: ProductOrders) {
        this.orders = value;
        this.ordersSubject.next();
    }

    get ProductOrders() {
        return this.orders;
    }

    get Total() {
        return this.total;
    }

    set Total(value: number) {
        this.total = value;
        this.totalSubject.next();
    }
}
