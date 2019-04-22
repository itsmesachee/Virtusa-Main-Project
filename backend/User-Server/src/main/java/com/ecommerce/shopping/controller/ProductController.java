package com.ecommerce.shopping.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.shopping.model.ProductModel;
import com.ecommerce.shopping.repository.ProductRepository;
import com.ecommerce.shopping.service.ProductService;


@CrossOrigin("*")	
@RequestMapping("/api/product")
	@RestController
	public class ProductController {
		
		@Autowired
		ProductRepository productrepository;
	 
	
		@PostMapping
		public void create(@RequestBody ProductModel filemodel)
		{
			productrepository.save(filemodel);
		}
		
		private ProductService productService;

	    public ProductController(ProductService productService) {
	        this.productService = productService;
	    }
	    
	    @GetMapping//(value = { "", "/" })
	    public @NotNull Iterable<ProductModel> getProducts() {
	        return productService.getAllProducts();
	    }
		
		
	    @GetMapping("/{productId}")
		public Optional<ProductModel> getOne(@PathVariable Long productId){
			return productrepository.findById(productId);
		}
			
		@PutMapping("/{productId}")
		public ProductModel update(@PathVariable(value = "productId") Long productId, @Valid @RequestBody ProductModel pm){
		
		ProductModel product = productrepository.getOne(productId);
	           
	    product.setProductName(pm.getProductName());
	    product.setImage1(pm.getImage1()); 
	    
	    product.setProductPrice(pm.getProductPrice());
	    
	    
	    product.setImage2(pm.getImage2());
	    product.setImage3(pm.getImage3());
	    product.setImage4(pm.getImage4());
	    product.setImage5(pm.getImage5());
	    product.setSizeChartImage(pm.getSizeChartImage());
	    product.setProductCareInstructions(pm.getProductCareInstructions());
	    product.setProductFabric(pm.getProductFabric());
	    product.setProductOccasion(pm.getProductOccasion());
	    product.setProductCareInstructions(pm.getProductCareInstructions());
	    product.setProductGenre(pm.getProductGenre());
	    product.setProductQuantity(pm.getProductQuantity());
	   

	   ProductModel updatedProduct = productrepository.save(product);
	    return updatedProduct;
		
		}
		@DeleteMapping("/{productId}")
		public void delete(@PathVariable(value = "productId") Long productId) {
			productrepository.deleteById(productId);
			
		}
		
	}
