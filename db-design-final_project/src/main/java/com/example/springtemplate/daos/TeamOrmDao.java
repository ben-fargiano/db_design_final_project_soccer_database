package com.example.springtemplate.daos;


import com.example.springtemplate.models.League;
import com.example.springtemplate.models.Team;
import com.example.springtemplate.repositories.TeamRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.sql.*;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
public class TeamOrmDao {

    @Autowired
    TeamRepository teamRepository;

    @PostMapping("/api/teams")
    public Team createTeam(@RequestBody Team team) {
        return teamRepository.save(team);
    }

    @GetMapping("/api/teams")
    public List<Team> findAllTeams() {
        return teamRepository.findAllTeams();
    }

    @GetMapping("/api/teams/players/{playerId}")
    public List<Team> findPlayerTeams(
            @PathVariable("playerId") Integer playerId) {
        return teamRepository.findPlayerTeams(playerId);
    }

    @GetMapping("/api/teams/owners/{ownerId}")
    public List<Team> findTeamsByOwner(
            @PathVariable("ownerId") Integer ownerId) {
        return teamRepository.findTeamsByOwner(ownerId);
    }

    @GetMapping("/api/teams/owner/{ownerId}")
    public List<Team> findTeamsByOwnerId(
            @PathVariable("ownerId") Integer ownerId) {
        return teamRepository.findTeamsByOwnerId(ownerId);
    }

    @GetMapping("/api/teams/leagues")
    public List<String> findAllLeagues() { return teamRepository.findAllLeagues(); }

    @GetMapping("/api/teams/leagues/{leagueName}")
    public List<Team> findAllTeamsByLeague(
            @PathVariable("leagueName") String leagueName) {
        return teamRepository.findAllTeamsByLeague(leagueName);
    }

    @GetMapping("/api/teams/find/{teamId}")
    public Team findTeamById(
            @PathVariable("teamId") Integer id) {
        return teamRepository.findTeamById(id);
    }

    @PutMapping("/api/teams/{teamId}")
    public Team updateTeam(
            @PathVariable("teamId") Integer id,
            @RequestBody Team teamUpdates) {
        Team team = teamRepository.findTeamById(id);
        team.setTeamName(teamUpdates.getName());
        team.setLeague(teamUpdates.getLeague());
        team.setRanking(teamUpdates.getRanking());
        team.setOwner_id(teamUpdates.getOwner_id());

        return teamRepository.save(team);
    }

    @DeleteMapping("/api/teams/{teamId}")
    public void deleteTeam(
            @PathVariable("teamId") Integer id) {
        teamRepository.deleteById(id);
    }

    public static void main(String[] args) throws SQLException, ClassNotFoundException {
        System.out.println("JDBC DAO");
        TeamOrmDao orm = new TeamOrmDao();

    }
}