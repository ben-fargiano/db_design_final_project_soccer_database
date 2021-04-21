package com.example.springtemplate.models;

import javax.persistence.*;

@Entity
@Table(name="players")
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String firstName;
    private String lastName;
    private String position;
    private Boolean injured;
    private Integer height;
    private Integer weight;
    private String strongfoot;
    private Integer birthYear;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }
    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }
    public String getPosition() { return position; }
    public void setPosition(String position) { this.position = position; }
    public Boolean getInjured() { return injured; }
    public void setInjured(Boolean injured) { this.injured = injured; }
    public Integer getHeight() { return height; }
    public void setHeight(Integer height) { this.height = height; }
    public Integer getWeight() { return weight; }
    public void setWeight(Integer weight) { this.weight = weight; }
    public String getStrongfoot() { return strongfoot; }
    public void setStrongfoot(String strongfoot) { this.strongfoot = strongfoot; }
    public Integer getBirthyear() { return birthYear; }
    public void setBirthyear(Integer birthYear) { this.birthYear = birthYear; }

    public Player(Integer id, String first_name, String last_name, String position, boolean injured, Integer height_centimeters,
                  Integer weight_kilometers, String strongfoot, Integer birth_year) {
        this.id = id;
        this.firstName = first_name;
        this.lastName = last_name;
        this.position = position;
        this.injured = injured;
        this.height = height_centimeters;
        this.weight = weight_kilometers;
        this.strongfoot = strongfoot;
        this.birthYear = birth_year;
    }

    public Player(String first_name, String last_name, String position, boolean injured, Integer height_centimeters,
                  Integer weight_kilometers, String strongfoot, Integer birth_year) {
        this.firstName = first_name;
        this.lastName = last_name;
        this.position = position;
        this.injured = injured;
        this.height = height_centimeters;
        this.weight = weight_kilometers;
        this.strongfoot = strongfoot;
        this.birthYear = birth_year;
    }

    public Player(String first_name, String last_name, String position, boolean injured) {
        this.firstName = first_name;
        this.lastName = last_name;
        this.position = position;
        this.injured = injured;
    }

    public Player(String firstName, String lastName, String position) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
    }

    public Player() {}
}
