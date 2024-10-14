package com.ltadapp.springbackend.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "CommonUser")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommonUser {
    @Id
    private ObjectId id;
    private String login;
    private String password;
}
