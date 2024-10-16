package com.ltadapp.springbackend.repository;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

import com.ltadapp.springbackend.model.RegisterUser;


public interface RegisterUserRepository extends MongoRepository<RegisterUser, ObjectId>  {
    List<RegisterUser> findByName(String name);

}