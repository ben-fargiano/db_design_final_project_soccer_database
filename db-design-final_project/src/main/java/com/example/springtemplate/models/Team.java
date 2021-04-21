package com.example.springtemplate.models;

import javax.persistence.*;

@Entity
@Table(name="teams")
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String league;
    private Integer owner_id;
    private Integer ranking;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getName() { return name; }
    public void setTeamName(String name) { this.name = name; }
    public String getLeague() { return league; }
    public void setLeague(String league) { this.league = league; }
    public Integer getOwner_id() { return owner_id; }
    public void setOwner_id(Integer owner_id) { this.owner_id = owner_id; }
    public Integer getRanking() { return ranking; }
    public void setRanking(Integer ranking) { this.ranking = ranking; }


    public Team(String name, String league, Integer ranking, Integer owner_id) {
        this.name = name;
        this.league = league;
        this.owner_id = owner_id;
        this.ranking = ranking;
    }

    public Team(String name, String league) {
        this.name = name;
        this.league = league;
    }

    public Team() {}
}
