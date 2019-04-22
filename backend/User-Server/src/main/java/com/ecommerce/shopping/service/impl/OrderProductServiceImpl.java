package com.ecommerce.shopping.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ecommerce.shopping.model.OrderProduct;
import com.ecommerce.shopping.repository.OrderProductRepository;
import com.ecommerce.shopping.service.OrderProductService;

@Service
@Transactional
public class OrderProductServiceImpl implements OrderProductService {

    private OrderProductRepository orderProductRepository;

    public OrderProductServiceImpl(OrderProductRepository orderProductRepository) {
        this.orderProductRepository = orderProductRepository;
    }

    @Override
    public OrderProduct create(OrderProduct orderProduct) {
        return this.orderProductRepository.save(orderProduct);
    }
}
