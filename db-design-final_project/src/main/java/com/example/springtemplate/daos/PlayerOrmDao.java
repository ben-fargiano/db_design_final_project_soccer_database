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
public class PlayerOrmDao {
    @Autowired
    PlayerRepository playerRepository;
    RosterRepository rosterRepository;

    @PostMapping("/api/players")
    public Player createPlayer(@RequestBody Player player) {
        return playerRepository.save(player);
    }

    @GetMapping("/api/players")
    public List<Player> findAllPlayers() {
        return playerRepository.findAllPlayers();
    }

    @GetMapping("/api/goals/goaltotals")
    public List<Integer> findGoalTotalsByPlayer() {
        return playerRepository.findGoalTotalsByPlayer();
    }

    @GetMapping("/api/players/topscorers")
    public List<Player> findTopScoringPlayers() {
        return playerRepository.findTopScoringPlayers();
    }

    @GetMapping("/api/players/find/{playerId}")
    public Player findPlayerById(
            @PathVariable("playerId") Integer id) {
        return playerRepository.findPlayerById(id);
    }

    @GetMapping("/api/goals/players")
    public List<Player> findAllPlayersByGoals() {
        return playerRepository.findAllPlayersByGoals();
    }

    @GetMapping("/api/teams/playersnumbers/{teamId}")
    public List<Integer> findPlayerNumbers(
            @PathVariable("teamId") Integer id) {
        return playerRepository.findPlayerNumbers(id);
    }

    @GetMapping("/api/teams/roster/players/{teamId}")
    public List<Player> findPlayersByTeam(
            @PathVariable("teamId") Integer id) {
        return playerRepository.findTeamPlayersById(id);
    }

    @PutMapping("/api/players/{playerId}")
    public Player updatePlayer(
            @PathVariable("playerId") Integer id,
            @RequestBody Player playerUpdates) {
        Player player = playerRepository.findPlayerById(id);
        player.setFirstName(playerUpdates.getFirstName());
        player.setLastName(playerUpdates.getLastName());
        player.setPosition(playerUpdates.getPosition());
        player.setInjured(playerUpdates.getInjured());
        player.setStrongfoot(playerUpdates.getStrongfoot());
        player.setHeight(playerUpdates.getHeight());
        player.setWeight(playerUpdates.getWeight());
        player.setBirthyear(playerUpdates.getBirthyear());

        return playerRepository.save(player);
    }

    @DeleteMapping("/api/players/{playerId}")
    public void deletePlayer(
            @PathVariable("playerId") Integer id) {
        playerRepository.deleteById(id);
    }

    public static void main(String[] args) throws SQLException, ClassNotFoundException {
        System.out.println("JDBC DAO");
        PlayerOrmDao dao = new PlayerOrmDao();

        // RETRIEVE A LIST OF ALL USERS FIRST NAMES
//        List<Player> players = dao.findAllPlayers();
//        for (Player player : players) {
//            System.out.println(player.getFirstName());
//            System.out.println(player.getLastName());
//        }
    }
}