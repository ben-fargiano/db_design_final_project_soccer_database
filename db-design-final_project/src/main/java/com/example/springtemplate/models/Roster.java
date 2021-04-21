package com.example.springtemplate.models;

import javax.persistence.*;

@Entity
@Table(name="rosters")
public class Roster {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer player_number;
    private Integer player_id;
    private Integer team_id;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public Integer getPlayer_number() { return player_number; }
    public void setPlayer_number(Integer player_number) { this.player_number = player_number; }
    public Integer getPlayer_id() { return player_id; }
    public void setPlayer_id(Integer player_id) { this.player_id = player_id; }
    public Integer getTeam_id() { return team_id; }
    public void setTeam_id(Integer team_id) { this.team_id = team_id; }

    public Roster(Integer id, Integer player_number, Integer player_id, Integer team_id) {
        this.id = id;
        this.player_number = player_number;
        this.player_id = player_id;
        this.team_id = team_id;
    }

    public Roster(Integer player_number, Integer player_id, Integer team_id) {
        this.player_number = player_number;
        this.player_id = player_id;
        this.team_id = team_id;
    }

    public Roster() {}
}
