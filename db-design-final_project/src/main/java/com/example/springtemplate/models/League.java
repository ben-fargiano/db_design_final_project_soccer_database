package com.example.springtemplate.models;

import javax.persistence.*;

@Entity
@Table(name="leagues")
public class League {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String league;
    private String country;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getLeague() { return league; }
    public void setLeague(String league) { this.league = league; }
    public String getCountry() { return country; }
    public void setCountry(String country) { this.country = country; }

    public League(Integer id, String league, String country) {
        this.id = id;
        this.league = league;
        this.country = country;
    }

    public League(String league, String country) {
        this.league = league;
        this.country = country;
    }

    public League() {}
}
