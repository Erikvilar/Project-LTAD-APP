package com.ltadapp.springbackend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.ltadapp.springbackend.model.CommonUser;

public interface CommonUserRepository extends MongoRepository<CommonUser, Long> {

    CommonUser save(Long user);

 

}
