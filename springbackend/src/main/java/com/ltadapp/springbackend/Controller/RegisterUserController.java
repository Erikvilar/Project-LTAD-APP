package com.ltadapp.springbackend.Controller;
import java.util.List;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.ltadapp.springbackend.model.RegisterUser;
import com.ltadapp.springbackend.service.CommonUserService;
import com.ltadapp.springbackend.service.RegisterUserService;

import jakarta.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;




@RestController
@RequestMapping("/api/register")
public class RegisterUserController {
    
    @Autowired
    private RegisterUserService registerUserService;
    @Autowired
    private CommonUserService commonUserService;

    @PostMapping("/user")
    public ResponseEntity<RegisterUser> postMethodName(  @RequestBody RegisterUser registerUser) {
            return new ResponseEntity<>(registerUserService.serviceRegister(registerUser), HttpStatus.OK);
    }
    @GetMapping("/name/{name}")
    public ResponseEntity<List<RegisterUser>> getMethodName(@PathVariable String name) {
        return new ResponseEntity<>(registerUserService.serviceGetByName(name), HttpStatus.OK);
    }
    
    
}
