package com.ecommerce.shopping.repository;

import org.springframework.data.repository.CrudRepository;

import com.ecommerce.shopping.model.OrderProduct;
import com.ecommerce.shopping.model.OrderProductPK;

public interface OrderProductRepository extends CrudRepository<OrderProduct, OrderProductPK> {
}