package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Player;
import com.example.springtemplate.models.Roster;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PlayerRepository
        extends CrudRepository<Player, Integer> {
    @Query(value = "SELECT * FROM players",
            nativeQuery = true)
    public List<Player> findAllPlayers();
    @Query(value = "SELECT * FROM players WHERE id=:playerId",
            nativeQuery = true)
    public Player findPlayerById(@Param("playerId") Integer id);
    @Query(value = "SELECT * \n" +
            "FROM players\n" +
            "INNER JOIN rosters ON players.id=rosters.player_id\n" +
            "WHERE rosters.team_id=:teamId", nativeQuery = true)
    public List<Player> findTeamPlayersById(@Param("teamId") Integer id);

    @Query(value = "SELECT * \n" +
            "FROM players\n" +
            "INNER JOIN rosters ON rosters.player_id=players.id\n"+
            "INNER JOIN goals ON goals.roster_id=rosters.id\n" +
            "ORDER BY goals.id;", nativeQuery = true)
    public List<Player> findAllPlayersByGoals();

    @Query(value = "SELECT rosters.player_number \n" +
            "FROM rosters\n" +
            "WHERE rosters.team_id=:teamId", nativeQuery = true)
    public List<Integer> findPlayerNumbers(@Param("teamId") Integer id);

    @Query(value = "SELECT COUNT(players.id) as num_goals FROM players\n" +
            "INNER JOIN rosters ON rosters.player_id=players.id\n" +
            "INNER JOIN goals ON rosters.id=goals.roster_id\n" +
            "GROUP BY players.id\n" +
            "ORDER BY num_goals DESC;", nativeQuery = true)
    public List<Integer> findGoalTotalsByPlayer();


    @Query(value = " SELECT * FROM players\n" +
            "INNER JOIN rosters ON rosters.player_id=players.id\n" +
            "INNER JOIN goals ON rosters.id=goals.roster_id\n" +
            "GROUP BY players.id\n" +
            "ORDER BY COUNT(players.id) DESC,\n" +
            "last_name;;", nativeQuery = true)
    public List<Player> findTopScoringPlayers();

}
