package com.ltadapp.springbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ltadapp.springbackend.model.CommonUser;
import com.ltadapp.springbackend.repository.CommonUserRepository;

@Service
public class CommonUserService {

    @Autowired
    private CommonUserRepository commonUserRepository;


    public  CommonUser insertUser(CommonUser user){
        try{
            
            return commonUserRepository.save(user);
        }catch{

        }
        
    }







}

