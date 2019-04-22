package com.ecommerce.shopping.controller;

import com.ecommerce.shopping.model.ApiResponse;
import com.ecommerce.shopping.model.User;
import com.ecommerce.shopping.model.UserDto;
import com.ecommerce.shopping.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping  //
    public ApiResponse<User> saveUser(@RequestBody UserDto user){
        return new ApiResponse<>(HttpStatus.OK.value(), "User saved successfully.",userService.save(user));
    }
    

    @GetMapping
    public ApiResponse<List<User>> listUser(){
        return new ApiResponse<>(HttpStatus.OK.value(), "User list fetched successfully.",userService.findAll());
    }


     @GetMapping("/{id}")
    public ApiResponse<User> getOne(@PathVariable int id){
        return new ApiResponse<>(HttpStatus.OK.value(), "User fetched successfully.",userService.findById(id));
    }

    @PutMapping("/{id}")
    public ApiResponse<UserDto> update(@RequestBody UserDto userDto) {
        return new ApiResponse<>(HttpStatus.OK.value(), "User updated successfully.",userService.update(userDto));
    }

   



}
