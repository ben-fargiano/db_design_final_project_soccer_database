package com.example.springtemplate.daos;

import com.example.springtemplate.models.Player;
import com.example.springtemplate.models.Roster;
import com.example.springtemplate.repositories.PlayerRepository;
import com.example.springtemplate.repositories.RosterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class RosterOrmDao {
    @Autowired
    RosterRepository rosterRepository;

    @PostMapping("/api/rosters")
    public Roster createRoster(@RequestBody Roster roster) {
        return rosterRepository.save(roster);
    }

    @GetMapping("/api/rosters")
    public List<Roster> findAllRosters() {
        return rosterRepository.findAllRosters();
    }

    @GetMapping("/api/rosters/find/{playerId}")
    public Roster findRosterById(
            @PathVariable("playerId") Integer id) {
        return rosterRepository.findRosterById(id);
    }

    @GetMapping("/api/rosters/playersrosters/{teamId}")
    public List<Roster> findRostersByTeam(
            @PathVariable("teamId") Integer id) {
        return rosterRepository.findRostersByTeam(id);
    }

    @GetMapping("/api/teams/playerteams/{playerId}")
    public List<Roster> findRostersByPlayer(
            @PathVariable("playerId") Integer id) {
        return rosterRepository.findRostersByPlayer(id);
    }

    @PutMapping("/api/rosters/find/{rosterId}")
    public Roster updateRoster(
            @PathVariable("rosterId") Integer id,
            @RequestBody Roster rosterUpdates) {
        Roster roster = rosterRepository.findRosterById(id);
        roster.setPlayer_number(rosterUpdates.getPlayer_number());
        roster.setPlayer_id(rosterUpdates.getPlayer_id());
        roster.setTeam_id(rosterUpdates.getTeam_id());
        return rosterRepository.save(roster);
    }

    @DeleteMapping("/api/teams/roster/players/{rosterId}")
    public void deleteRoster(
            @PathVariable("rosterId") Integer rosterId) {
        rosterRepository.deleteById(rosterId);
    }

    public static void main(String[] args) throws SQLException, ClassNotFoundException {
        System.out.println("JDBC DAO");
        RosterOrmDao dao = new RosterOrmDao();

    }
}