package com.ltadapp.springbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.List;
import com.ltadapp.springbackend.model.CommonUser;
import com.ltadapp.springbackend.model.RegisterUser;
import com.ltadapp.springbackend.repository.CommonUserRepository;

@Service
public class CommonUserService {

    @Autowired
    private CommonUserRepository commonUserRepository;

    public ResponseEntity<String> insertAndVerifyExists(CommonUser user) {

        if (commonUserRepository.findByLogin(user.getLogin()) != null) {
            return ResponseEntity.status(HttpStatus.OK).body("OK");
        }

        return ResponseEntity.status(HttpStatus.CONFLICT).body("Usuario não encontrado");
    }

 

}
