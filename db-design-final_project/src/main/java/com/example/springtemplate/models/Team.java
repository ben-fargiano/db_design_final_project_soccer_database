package com.example.springtemplate.models;

import javax.persistence.*;

@Entity
@Table(name="teams")
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    @Enumerated (EnumType.STRING)
    private League league;
    private String stadium;
    private Integer owner_id;
    private Integer league_ranking;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getName() { return name; }
    public void setTeamName(String name) { this.name = name; }
    public String getStadium() { return stadium; }
    public void setStadium(String stadium) { this.stadium = stadium;}
    public League getLeague() { return league; }
    public void setLeague(League league) { this.league = league; }
    public Integer getOwner_id() { return owner_id; }
    public void setOwner_id(Integer owner_id) { this.owner_id = owner_id; }
    public Integer getRanking() { return league_ranking; }
    public void setRanking(Integer ranking) { this.league_ranking = ranking; }


    public Team(String name, League league, Integer ranking, Integer owner_id) {
        this.name = name;
        this.league = league;
        this.owner_id = owner_id;
        this.league_ranking = ranking;
    }

    public Team(String name, League league) {
        this.name = name;
        this.league = league;
    }

    public Team() {}
}
