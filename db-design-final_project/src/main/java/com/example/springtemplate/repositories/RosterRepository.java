package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Roster;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RosterRepository
        extends CrudRepository<Roster, Integer> {

    @Query(value = "SELECT * FROM rosters",
            nativeQuery = true)
    public List<Roster> findAllRosters();
    @Query(value = "SELECT * FROM rosters WHERE id=:rosterId",
            nativeQuery = true)
    public Roster findRosterById(@Param("rosterId") Integer rosterId);
    @Query(value = "SELECT * \n" +
            "FROM rosters\n" +
            "WHERE rosters.team_id=:rosterId", nativeQuery = true)
    public List<Roster> findRostersByTeam(@Param("rosterId") Integer rosterId);
    @Query(value = "SELECT * \n" +
            "FROM rosters\n" +
            "WHERE rosters.player_id=:playerId", nativeQuery = true)
    public List<Roster> findRostersByPlayer(@Param("playerId") Integer playerId);
}
