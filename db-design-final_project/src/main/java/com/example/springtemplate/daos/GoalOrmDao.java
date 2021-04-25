package com.example.springtemplate.daos;


import com.example.springtemplate.models.Goal;
import com.example.springtemplate.repositories.GoalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.sql.*;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
public class GoalOrmDao {

    @Autowired
    GoalRepository goalRepository;

    @PostMapping("/api/goals")
    public Goal createGoal(@RequestBody Goal goal) {
        return goalRepository.save(goal);
    }

    @GetMapping("/api/goals")
    public List<Goal> findAllGoals() {
        return goalRepository.findAllGoals();
    }

    @GetMapping("/api/goals/players/{playerId}")
    public List<Goal> findGoalsByPlayerId(
            @PathVariable("playerId") Integer playerId) {
        return goalRepository.findGoalsByPlayerId(playerId);
    }

    @GetMapping("/api/goals/teams/{teamId}")
    public List<Goal> findGoalsByTeamId(
            @PathVariable("teamId") Integer teamId) {
        return goalRepository.findGoalsByTeamId(teamId);
    }

    @GetMapping("/api/goals/games/{gameId}")
    public List<Goal> findGoalsByGameId(
            @PathVariable("gameId") Integer gameId) {
        return goalRepository.findGoalsByGameId(gameId);
    }

    @GetMapping("/api/goals/find/{goalId}")
    public Goal findGoalById(
            @PathVariable("goalId") Integer id) {
        return goalRepository.findGoalById(id);
    }

    @PutMapping("/api/goals/{goalId}")
    public Goal updateGoal(
            @PathVariable("goalId") Integer id,
            @RequestBody Goal goalUpdates) {
        Goal goal = goalRepository.findGoalById(id);
        goal.setMinute(goalUpdates.getMinute());
        goal.setGame_id(goalUpdates.getGame_id());
        goal.setRoster_id(goalUpdates.getRoster_id());

        return goalRepository.save(goal);
    }

    @DeleteMapping("/api/goals/{goalId}")
    public void deleteGoal(
            @PathVariable("goalId") Integer goalId) {
        goalRepository.deleteById(goalId);
    }

    public static void main(String[] args) throws SQLException, ClassNotFoundException {
        System.out.println("JDBC DAO");
        GoalOrmDao orm = new GoalOrmDao();

    }
}