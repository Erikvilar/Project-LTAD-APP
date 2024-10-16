package com.ltadapp.springbackend.service;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import java.util.List;
import com.ltadapp.springbackend.model.RegisterUser;
import com.ltadapp.springbackend.repository.RegisterUserRepository;


@Service
public class RegisterUserService {
    @Autowired
    private RegisterUserRepository registerUserRepository;

    public RegisterUser serviceRegister(RegisterUser registerUser){
        
        return registerUserRepository.save(registerUser);
     
    }
    public List<RegisterUser> serviceGetByName(String name){
        return registerUserRepository.findByName(name);
    }


}
