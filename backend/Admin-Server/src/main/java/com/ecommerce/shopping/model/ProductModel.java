package com.ecommerce.shopping.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

	@Entity
	@Table(name="product")
	public class ProductModel {
		
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		 @Column(name="product_id")
		private Long productId;
	    
	    @Column(name="product_name")
		private String productName;

		@Column(name="product_price")
		private double productPrice;
		
	    @Column(name = "image1")
		private String image1;	
	    
	    @Column(name = "image2")
		private String image2;
	    
	    @Column(name = "image3")
		private String image3;
	    
	    @Column(name = "image4")
		private String image4;

	    @Column(name = "image5")
		private String image5;

	    @Column(name = "image6")
		private String sizeChartImage;
	    
	    @Column(name="product_genre")
		private String productGenre;
	    
	    @Column(name="product_quantity")
		private int productQuantity;

		@Column(name="product_care_instructions")
		private String productCareInstructions;
		
		@Column(name="product_fabric")
		private String productFabric;
		
		@Column(name="product_occasion")
		private String productOccasion;
		
		@Column(name="product_package_contents")
		private String productPackageContents;
	    
	    public ProductModel(Long productId, String productName, Double productPrice, String pictureUrl) {
	        this.productId = productId;
	        this.productName = productName;
	        this.productPrice = productPrice;
	        this.image1 = pictureUrl;
	    }
	    public ProductModel() {
	    }
		public Long getProductId() {
			return productId;
		}
		public void setProductId(Long productId) {
			this.productId = productId;
		}
		public String getProductName() {
			return productName;
		}
		public void setProductName(String productName) {
			this.productName = productName;
		}
		public double getProductPrice() {
			return productPrice;
		}
		public void setProductPrice(double productPrice) {
			this.productPrice = productPrice;
		}
		public String getImage1() {
			return image1;
		}
		public void setImage1(String image1) {
			this.image1 = image1;
		}
		
	    
	    
//			@Id
//			@GeneratedValue
//			 @Column(name="product_id")
//			private Long productId;
//			
//		    @Column(name = "image1")
//			private String image1;
//		    
		    
//		    
//		    @Column(name="product_name")
//			private String productName;
//		    
		    

//			@Column(name="product_price")
//			private double productPrice;	
		    
			
			
			public String getProductCareInstructions() {
				return productCareInstructions;
			}

			public void setProductCareInstructions(String productCareInstructions) {
				this.productCareInstructions = productCareInstructions;
			}

			public String getProductFabric() {
				return productFabric;
			}

			public void setProductFabric(String productFabric) {
				this.productFabric = productFabric;
			}

			public String getProductOccasion() {
				return productOccasion;
			}

			public void setProductOccasion(String productOccasion) {
				this.productOccasion = productOccasion;
			}

			public String getProductPackageContents() {
				return productPackageContents;
			}

			public void setProductPackageContents(String productPackageContents) {
				this.productPackageContents = productPackageContents;
			}

			public String getImage2() {
				return image2;
			}

			public void setImage2(String image2) {
				this.image2 = image2;
			}

			public String getImage3() {
				return image3;
			}

			public void setImage3(String image3) {
				this.image3 = image3;
			}

			public String getImage4() {
				return image4;
			}

			public void setImage4(String image4) {
				this.image4 = image4;
			}

			public String getImage5() {
				return image5;
			}

			public void setImage5(String image5) {
				this.image5 = image5;
			}

			public String getSizeChartImage() {
				return sizeChartImage;
			}

			public void setSizeChartImage(String sizeChartImage) {
				this.sizeChartImage = sizeChartImage;
			}
//
//			public Long getProductId() {
//				return productId;
//			}
//
//			public void setProductId(Long productId) {
//				this.productId = productId;
//			}
//
//			public String getImage1() {
//				return image1;
//			}
//
//			public void setImage1(String image1) {
//				this.image1 = image1;
//			}
//
//			
//			public String getProductName() {
//				return productName;
//			}
//
//			public void setProductName(String productName) {
//				this.productName = productName;
//			}
//			
//
			public String getProductGenre() {
				return productGenre;
			}

			public void setProductGenre(String productGenre) {
				this.productGenre = productGenre;
			}
//
//			public double getProductPrice() {
//				return productPrice;
//			}
//
//			public void setProductPrice(double productPrice) {
//				this.productPrice = productPrice;
//			}
//
			public int getProductQuantity() {
				return productQuantity;
			}

			public void setProductQuantity(int productQuantity) {
				this.productQuantity = productQuantity;
			}
	}
