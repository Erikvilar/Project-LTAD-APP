package com.ltadapp.springbackend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.ltadapp.springbackend.model.CommonUser;
import java.util.List;



public interface CommonUserRepository extends MongoRepository<CommonUser, Long> {

 
    CommonUser findItemByName(String login);
    
}
