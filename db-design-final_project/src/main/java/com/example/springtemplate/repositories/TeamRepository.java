package com.example.springtemplate.repositories;

import com.example.springtemplate.models.League;
import com.example.springtemplate.models.Team;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TeamRepository
        extends CrudRepository<Team, Integer> {
    @Query(value = "SELECT * FROM teams",
            nativeQuery = true)
    public List<Team> findAllTeams();

    @Query(value = "SELECT * \n" +
            "FROM teams\n" +
            "INNER JOIN rosters ON teams.id=rosters.team_id\n" +
            "WHERE rosters.player_id=:playerId", nativeQuery = true)
    public List<Team> findPlayerTeams(@Param("playerId") Integer playerId);

    @Query(value = "SELECT * \n" +
            "FROM teams\n" +
            "WHERE teams.owner_id=:ownerId", nativeQuery = true)
    public List<Team> findTeamsByOwnerId(@Param("ownerId") Integer ownerId);

    @Query(value = "SELECT leagues.league FROM leagues\n", nativeQuery = true)
    public List<String> findAllLeagues();

    @Query(value = "SELECT * \n" +
            "FROM teams\n" +
            "WHERE teams.league=:leagueName", nativeQuery = true)
    public List<Team> findAllTeamsByLeague(@Param("leagueName") String leagueName);

    @Query(value = "SELECT * \n" +
            "FROM teams\n" +
            "WHERE teams.owner_id=:ownerId", nativeQuery = true)
    public List<Team> findTeamsByOwner(@Param("ownerId") Integer ownerId);

    @Query(value = "SELECT * FROM teams WHERE id=:teamId",
            nativeQuery = true)
    public Team findTeamById(@Param("teamId") Integer id);

    @Query(value = "SELECT * FROM teams WHERE league=:leagueId",
            nativeQuery = true)
    public List<Team> findTeamsByLeague(@Param("leagueId") League leagueId);




}
