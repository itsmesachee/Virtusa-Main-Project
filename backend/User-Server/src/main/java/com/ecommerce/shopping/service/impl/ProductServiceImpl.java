package com.ecommerce.shopping.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ecommerce.shopping.exception.ResourceNotFoundException;
import com.ecommerce.shopping.model.ProductModel;
import com.ecommerce.shopping.repository.ProductRepository;
import com.ecommerce.shopping.service.ProductService;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {

    private ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Iterable<ProductModel> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public ProductModel getProduct(long id) {
        return productRepository
          .findById(id)
          .orElseThrow(() -> new ResourceNotFoundException("Product not found"));
    }

    @Override
    public ProductModel save(ProductModel product) {
        return productRepository.save(product);
    }
}


