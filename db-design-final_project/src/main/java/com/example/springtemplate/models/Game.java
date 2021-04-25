package com.example.springtemplate.models;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name="games")
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer matchweek;
    private Integer home_team_id;
    private Integer away_team_id;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public Integer getMatchweek() { return matchweek; }
    public void setMatchweek(Integer matchweek) { this.matchweek = matchweek; }
    public Integer getHome_team_id() { return home_team_id; }
    public void setHome_team_id(Integer home_team_id) { this.home_team_id = home_team_id; }
    public Integer getAway_team_id() { return away_team_id; }
    public void setAway_team_id(Integer away_team_id) { this.away_team_id = away_team_id; }

    public Game(Integer id, Integer matchweek, Integer home_team_id, Integer away_team_id) {
        this.id = id;
        this.matchweek = matchweek;
        this.home_team_id = home_team_id;
        this.away_team_id = away_team_id;
    }

    public Game(Integer matchweek, Integer home_team_id, Integer away_team_id) {
        this.matchweek = matchweek;
        this.home_team_id = home_team_id;
        this.away_team_id = away_team_id;
    }

    public Game() {}
}
