package com.ecommerce.shopping.dto;

import com.ecommerce.shopping.model.ProductModel;

public class OrderProductDto {

    private ProductModel product;
    private Integer quantity;

    public ProductModel getProduct() {
        return product;
    }

    public void setProduct(ProductModel product) {
        this.product = product;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
