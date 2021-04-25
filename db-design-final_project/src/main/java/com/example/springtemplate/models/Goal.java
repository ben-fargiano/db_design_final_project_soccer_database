package com.example.springtemplate.models;

import javax.persistence.*;

@Entity
@Table(name="goals")
public class Goal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer minute;
    private Integer game_id;
    private Integer roster_id;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public Integer getMinute() { return minute; }
    public void setMinute(Integer minute) { this.minute = minute; }
    public Integer getGame_id() { return game_id; }
    public void setGame_id(Integer game_id) { this.game_id = game_id; }
    public Integer getRoster_id() { return roster_id; }
    public void setRoster_id(Integer roster_id) { this.roster_id = roster_id; }


    public Goal(Integer id, Integer minute, Integer game_id, Integer roster_id) {
        this.id = id;
        this.minute = minute;
        this.game_id = game_id;
        this.roster_id = roster_id;
    }

    public Goal(Integer minute, Integer game_id, Integer roster_id) {
        this.minute = minute;
        this.game_id = game_id;
        this.roster_id = roster_id;
    }

    public Goal() {}
}
