package com.ltadapp.springbackend.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "CredentialsUser")
public class CredentialUser {
    
    private String nameAndLastName;
    private String password;
    
}
