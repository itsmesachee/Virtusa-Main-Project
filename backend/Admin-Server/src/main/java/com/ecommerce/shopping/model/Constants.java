package com.ecommerce.shopping.model;

public class Constants {

    public static final long ACCESS_TOKEN_VALIDITY_SECONDS = 5*60*60;
    public static final long EXPIRATION_TIME = 864_000_000; // 10 days
    public static final String SIGNING_KEY = "helloworld";  //devglan123r
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
}
