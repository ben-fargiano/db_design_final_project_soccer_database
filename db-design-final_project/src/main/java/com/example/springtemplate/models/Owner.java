package com.example.springtemplate.models;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name="owners")
public class Owner {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private String email;
    private Date date_of_birth;
    private Double net_worth;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }
    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public Date getDate_of_birth() { return date_of_birth; }
    public void setDate_of_birth(Date date_of_birth) { this.date_of_birth = date_of_birth; }
    public Double getNet_worth() { return net_worth; }
    public void setNet_worth(Double net_worth) { this.net_worth = net_worth; }

    public Owner(Integer id, String first_name, String last_name, String username, String password, Date date_of_birth, Double net_worth) {
        this.id = id;
        this.firstName = first_name;
        this.lastName = last_name;
        this.username = username;
        this.password = password;
        this.date_of_birth = date_of_birth;
        this.net_worth = net_worth;
    }

    public Owner(String first_name, String last_name, String username, String password, String email, Date date_of_birth, Double net_worth) {
        this.firstName = first_name;
        this.lastName = last_name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.date_of_birth = date_of_birth;
        this.net_worth = net_worth;
    }

    public Owner() {}
}
