package com.ltadapp.springbackend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ltadapp.springbackend.model.CommonUser;
import com.ltadapp.springbackend.repository.CommonUserRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class CommonUserController {
    @Autowired
    private CommonUserRepository commonUserRepository;

   
    @GetMapping
    public ResponseEntity<List<CommonUser>> getAllUsers () {
        
        return new ResponseEntity<>(commonUserRepository.findAll(),  HttpStatus.OK);
    }
    @PostMapping
    public CommonUser insertUser (@RequestBody CommonUser user) {
        return commonUserRepository.save(user);

    }
    
    

}
