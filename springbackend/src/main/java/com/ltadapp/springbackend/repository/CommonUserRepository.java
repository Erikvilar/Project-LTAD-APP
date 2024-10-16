package com.ltadapp.springbackend.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import com.ltadapp.springbackend.model.CommonUser;
import com.ltadapp.springbackend.model.RegisterUser;

public interface CommonUserRepository extends MongoRepository<CommonUser, ObjectId> {

    CommonUser save(Long user);
    CommonUser findByLogin(String login);

 

}
