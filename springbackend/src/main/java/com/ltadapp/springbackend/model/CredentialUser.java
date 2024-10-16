package com.ltadapp.springbackend.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "CredentialsUser")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CredentialUser {
    @Id
    private ObjectId credentialUserID;
    private String nameAndLastName;
    private String password;
    
}
