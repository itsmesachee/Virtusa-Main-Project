package com.ecommerce.shopping.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.ecommerce.shopping.model.ProductModel;

@Transactional
public interface ProductRepository extends JpaRepository<ProductModel, Long>{	
}