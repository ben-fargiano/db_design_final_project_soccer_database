package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Goal;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface GoalRepository
        extends CrudRepository<Goal, Integer> {
    @Query(value = "SELECT * FROM goals",
            nativeQuery = true)
    public List<Goal> findAllGoals();
    @Query(value = "SELECT * FROM goals WHERE id=:goalId",
            nativeQuery = true)
    public Goal findGoalById(@Param("goalId") Integer goalId);
    @Query(value = "SELECT * FROM goals\n" +
            "INNER JOIN rosters ON goals.roster_id = rosters.id\n" +
            "WHERE rosters.team_id=:teamId",
            nativeQuery = true)
    public List<Goal> findGoalsByTeamId(@Param("teamId") Integer teamId);
    @Query(value = "SELECT * FROM goals\n" +
            "INNER JOIN rosters ON goals.roster_id = rosters.id\n" +
            "WHERE rosters.player_id=:playerId",
            nativeQuery = true)
    public List<Goal> findGoalsByPlayerId(@Param("playerId") Integer playerId);
    @Query(value = "SELECT * FROM goals WHERE goals.game_id=:gameId",
            nativeQuery = true)
    public List<Goal> findGoalsByGameId(@Param("gameId") Integer gameId);

}
