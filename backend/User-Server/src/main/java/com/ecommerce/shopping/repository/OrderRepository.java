package com.ecommerce.shopping.repository;

import org.springframework.data.repository.CrudRepository;

import com.ecommerce.shopping.model.Order;

public interface OrderRepository extends CrudRepository<Order, Long> {
}
