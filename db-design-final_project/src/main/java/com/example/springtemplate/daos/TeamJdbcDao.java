package com.example.springtemplate.daos;

import com.example.springtemplate.models.Player;
import com.example.springtemplate.models.Team;

import java.sql.*;
import java.util.*;

public class TeamJdbcDao {
    static final String DRIVER = "com.mysql.cj.jdbc.Driver";
    static final String HOST = "127.0.0.1";
    static final String SCHEMA = "epl_final_project";
    static final String CONFIG = "serverTimezone=UTC";
    static final String URL =
            "jdbc:mysql://"+HOST+"/"+SCHEMA+"?"+CONFIG;
    static final String USERNAME = "root";
    static final String PASSWORD = "cs3200";

    static Connection connection = null;
    static PreparedStatement statement = null;
    String CREATE_TEAM = "INSERT INTO teams VALUES (null, ?, ?, null)";
    String FIND_PLAYERS_BY_TEAM = "" +
            "SELECT players.id, players.first_name, players.last_name, players.position, rosters.player_number" +
            "FROM players, rosters\n" +
            "WHERE rosters.team_id=?\n" +
            "AND players.id=rosters.player_id\n" +
            "GROUP BY players.id;";
    String FIND_PLAYERS_BY_TEAM_2 = "SELECT players.id, players.first_name, players.last_name, players.position, rosters.player_number\n" +
            "FROM players\n" +
            "INNER JOIN rosters ON players.id=rosters.player_id\n" +
            "WHERE rosters.team_id=?;";
    String FIND_TEAM_BY_ID = "SELECT * FROM teams WHERE id=?";
    String FIND_ALL_TEAMS = "SELECT * FROM teams";
    String DELETE_TEAM = "DELETE FROM teams WHERE id=?";
    String UPDATE_TEAM_LEAGUE = "UPDATE teams SET league=? WHERE id=?";
    String UPDATE_TEAM = "UPDATE teams SET name=?, league=?, WHERE id=?";

    private Connection getConnection() throws ClassNotFoundException, SQLException {
        Class.forName(DRIVER);
        return DriverManager.getConnection(URL, USERNAME, PASSWORD);
    }

    private void closeConnection(Connection connection) throws SQLException {
        connection.close();
    }

    public Team findTeamById(Integer id) throws SQLException, ClassNotFoundException {
        Team team = null;
        connection = getConnection();
        statement = connection.prepareStatement(FIND_TEAM_BY_ID);
        statement.setInt(1, id);
        ResultSet resultSet = statement.executeQuery();
        if(resultSet.next()) {
            team = new Team(
                    resultSet.getString("name"),
                    resultSet.getString("league"),
                    resultSet.getInt("ranking"),
                    resultSet.getInt("owner_id")
            );
        }
        closeConnection(connection);
        return team;
    }


    public static void main(String[] args) throws SQLException, ClassNotFoundException {
        System.out.println("JDBC DAO");
        TeamJdbcDao dao = new TeamJdbcDao();
    }


}
