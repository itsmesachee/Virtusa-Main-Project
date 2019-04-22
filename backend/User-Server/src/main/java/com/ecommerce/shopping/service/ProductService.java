package com.ecommerce.shopping.service;

import org.springframework.validation.annotation.Validated;

import com.ecommerce.shopping.model.ProductModel;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Validated
public interface ProductService {

    @NotNull Iterable<ProductModel> getAllProducts();

    ProductModel getProduct(@Min(value = 1L, message = "Invalid product ID.") long id);

    ProductModel save(ProductModel product);
}
