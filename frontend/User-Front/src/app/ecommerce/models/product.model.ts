export class Product {
    productId: number;
    productName: string;
    productPrice: number;
    image1: string;

    constructor(productId: number, productName: string, productPrice: number, image1: string) {
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.image1 = image1;
    }
}
