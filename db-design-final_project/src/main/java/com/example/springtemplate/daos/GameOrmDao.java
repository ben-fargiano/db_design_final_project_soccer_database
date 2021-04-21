package com.example.springtemplate.daos;


import com.example.springtemplate.models.Game;
import com.example.springtemplate.repositories.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.sql.*;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
public class GameOrmDao {

    @Autowired
    GameRepository gameRepository;

    @PostMapping("/api/games")
    public Game createGame(@RequestBody Game game) {
        return gameRepository.save(game);
    }

    @GetMapping("/api/games")
    public List<Game> findAllGames() {
        return gameRepository.findAllGames();
    }


    @GetMapping("/api/games/teams/{teamId}")
    public List<Game> findGamesByTeamId(
            @PathVariable("teamId") Integer teamId) {
        return gameRepository.findGamesByTeamId(teamId);
    }

    @GetMapping("/api/games/find/{gameId}")
    public Game findGameById(
            @PathVariable("gameId") Integer gameId) {
        return gameRepository.findGameById(gameId);
    }

    @PutMapping("/api/games/{gameId}")
    public Game updateGame(
            @PathVariable("gameId") Integer id,
            @RequestBody Game gameUpdates) {
        Game game = gameRepository.findGameById(id);
        game.setMatchweek(gameUpdates.getMatchweek());
        game.setHome_team_id(gameUpdates.getHome_team_id());
        game.setAway_team_id(gameUpdates.getAway_team_id());

        return gameRepository.save(game);
    }

    @DeleteMapping("/api/games/{gameId}")
    public void deleteGame(
            @PathVariable("gameId") Integer id) {
        gameRepository.deleteById(id);
    }

    public static void main(String[] args) throws SQLException, ClassNotFoundException {
        System.out.println("JDBC DAO");
        GameOrmDao orm = new GameOrmDao();

    }
}