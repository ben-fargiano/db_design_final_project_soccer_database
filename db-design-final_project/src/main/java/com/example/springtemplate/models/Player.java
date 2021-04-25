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
    private Integer heightCentimeters;
    private Integer weightKilograms;

    @Enumerated(EnumType.STRING)
    private Strongfoot strongfoot;
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
    public Integer getHeightCentimeters() { return heightCentimeters; }
    public void setHeightCentimeters(Integer height_centimeters) { this.heightCentimeters = height_centimeters; }
    public Integer getWeightKilograms() { return weightKilograms; }
    public void setWeightKilograms(Integer weight_kilograms) { this.weightKilograms = weight_kilograms; }
    public Strongfoot getStrongfoot() { return strongfoot; }
    public void setStrongfoot(Strongfoot strongfoot) { this.strongfoot = strongfoot; }
    public Integer getBirthyear() { return birthYear; }
    public void setBirthyear(Integer birthYear) { this.birthYear = birthYear; }

    public Player(Integer id, String first_name, String last_name, String position, boolean injured, Integer height_centimeters,
                  Integer weight_kilometers, Strongfoot strongfoot, Integer birth_year) {
        this.id = id;
        this.firstName = first_name;
        this.lastName = last_name;
        this.position = position;
        this.injured = injured;
        this.heightCentimeters = height_centimeters;
        this.weightKilograms = weight_kilometers;
        this.strongfoot = strongfoot;
        this.birthYear = birth_year;
    }

    public Player(String first_name, String last_name, String position, boolean injured, Integer height_centimeters,
                  Integer weight_kilometers, Strongfoot strongfoot, Integer birth_year) {
        this.firstName = first_name;
        this.lastName = last_name;
        this.position = position;
        this.injured = injured;
        this.heightCentimeters = height_centimeters;
        this.weightKilograms = weight_kilometers;
        this.strongfoot = strongfoot;
        this.birthYear = birth_year;
    }

    public Player(String first_name, String last_name, String position, boolean injured, Integer height_centimeters,
                  Integer weight_kilometers, Strongfoot strongfoot) {
        this.firstName = first_name;
        this.lastName = last_name;
        this.position = position;
        this.injured = injured;
        this.heightCentimeters = height_centimeters;
        this.weightKilograms = weight_kilometers;
        this.strongfoot = strongfoot;
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
