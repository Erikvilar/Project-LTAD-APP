package com.ltadapp.springbackend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document("CommonUser")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommonUser {
    @Id
    private Long id;
    private String login;



    

}
