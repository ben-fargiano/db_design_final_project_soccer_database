Canvas Group: Database Design 20
Project Name: Soccer Roster Management Database

Team Member: Ben Fargiano (working alone)
CS 3200, Section 04

------------------------------------

HOW TO RUN:
1. Download "db_design_final_project_database.zip" and import into SQL in a schema called "epl_final_project" with user "root" and password "cs3200". If files do not import correctly, use the given SQL scripts (the folder "db_create_statements") to create tables in SQL and input data.
2. Download "db_design_final_project_application" folder and open it in an IDE (I used IntelliJ IDEA).
3. Run "DemoApplication.java" in "src/main/java/DemoApplication"
4. Open "http://localhost:63343/DemoApplication.java/spring-template/src/main/webapp/react/social/index.html" in a browser (Chrome works well for me) and you can begin to use the application.

In case something does not work as intended, the two video files included in this git repository show the application in action, performing CRUD operations with the SQL database.

PROJECT DESCRIPTION:
This project is a database of soccer players, rosters, teams, owners, goals, and some games. It allows for adding many Players to a single Team and adding Players to multiple Teams via a Rosters association class. It also utilizes portable enumeration twice, once in a "Leagues" field and once in a "Strongfoot" field. The most interesting part of this application (from a querying standpoint) is the inner-join query used to generate a the Goal Leaderboard (tabulates which players have scored the most goals by linking Players to Goals via the Rosters class. This application allows for all CRUD operations between Owners, Players, Teams, Rosters, and Goals.

------------------------------------

Database Purpose: Store relationships between owners, teams, players, games, and goals with a rosters association class used to break up a many-to-many relationship between teams and players. A team can have multiple players, while a player can be on many teams (national team, club team). 
I used two portable enumeration classes (strongfoot and league) to limit the values that could exist for players strongfoot (“left”, “right”, or “both”) and leagues (one of eight permissible leagues including “English Premier League”, “International”, “Serie A”, etc).
I am a big fan of soccer (particular EPL and the other European Leagues) so I decided to use this project to create a database to manage aspects of soccer roster/game organization with a few basic DAOs.

User Data Model: Owners
The owners table keeps track of team owners with first_name, last_name, username, password, email, date_of_birth, and net_worth (in billions of dollars, USD).
Owners can be associated with one or more teams (one-to-many relationship).


User-to-Domain Relationship: One to Many (One Owner to Many Teams)
One owner can be associated with one or more teams. However, teams can exist without their owners; on deletion, the owner_id foreign key in "teams" is set to NULL.


Domain Object to Domain Object: One to Many (One Game to Many Goals)
A game can have 0..* goals, but each record in "goals" can only be associated with one record in "games".


Domain Object to Domain Object: One to Many (One Player to Many Goals)
A player can score 0..* goals, but each record in "players" can only be associated with one record in "players". This relationship is accomplished by linking the Rosters record unique id (relating a team and a player) to a foreign key in "goals" called "roster_id".


Domain Object to Domain Object: Many to Many (Many Teams to Many Players)
A team can have 0..* players, and a player can be on 0..* teams (club team, international team, etc). The Rosters table serves as an association class linking players to teams, while also adding a player_number (since a player can have different jersey numbers on each team they are a part of).


Portable Enumeration:
The "strongfoot" field in the players table must be one of the values in the "strongfoot" column of the strongfeet table ("left", "right", or "both").
The "league" field in the teams table must be one of the values in the "league" column of the leagues table.


Brief Explanations of Three Domain Object Data Models:
Teams -> each record represents a team with a name, league (of type enum: League), league ranking, stadium, and owner_id (foreign key, references an owner. Defaults to NULL). Primary key is "id" (auto incrementing).
Players -> each record represents a player with a first_name, last_name, position, injured status (boolean: true if injured, defaults to false), height, weight, strongfoot (of type enum: Strongfoot), birthyear. Primary key is "id" (auto incrementing).
Goals -> each record represents a goal scored in a specific minute, game_id (foreign key, reference a record in "games" via "games.id"),  and roster_id (foreign key, references a record in "rosters" via "rosters.id"). Primary key is "id" (auto incrementing).


User Interface:
The user interface I have developed using React.js features the following screens:
- Owner-List : shows all owners in a list, links to Owner-Form-Editor and Owner-Teams-List
- Owner-Form-Editor : CRUD screen that allows for editing an owner's attributes
- OwnerTeam-List : shows all teams for a specific owner in a list, links to Team-Form-Editor, Player-List, Team-List, Owner-List
- Team-List : shows all teams in a list, links to Team-Form-Editor, Owner-List, Player-List, League-List (static)
- Team-Form-Editor : CRUD screen that allows for editing an team's attributes
- Player-List : shows all players in a list, links to Roster-Form-Editor, Goal-Leaderboard-List, PlayerTeam-List, Owner-List, Team-List, Player-Form-Editor
- Player-Team-List : shows all teams associated with a given player in a list, links to Player-List, Team-List, League-List, Team-Form-Editor
- Player-Form-Editor : CRUD screen that allows for editing an player's attributes
- Roster-List : shows all roster items in a list, links to Roster-Form-Editor, Team-List, Owner-List, Player-List
- Roster-Form-Editor : CRUD screen that allows for editing a roster item, links to Roster-List
- Goal-Leaderboard-List : displays goal totals for each player, links to Goal-List, Goal-Form-Editor, Owner-List, Team-List, Player-List
- Goal-List : shows a list of all goals, links to Goal-Leaderboard-List, Goal-Form-Editor, Owner-List, Team-List, Player-List, Player-Form-Editor, Game-Form-Editor
- Goal-Player-List : shows a list of all goals scored by a given player, links to Goal-Leaderboard-List, Roster-Form-Editor, Goal-Form-Editor, Game-Form-Editor
- Game-Form-Editor : allows for editing of games, links to some other pages
- League-List : list of Leagues (used as portable enumeration values in Teams table), links to Team-List, Player-List, and League-Team-List
- LeagueTeam-List : list of Teams in a given League, links to Team-List, Owner-List Player-List, Team-Form-Editor


-------------


Below is a brief explanation of each table, as well as the SQL create statements used.


Owners:
Owner of a team
Highest level of data in this database, and functions as a User DAO

DROP TABLE IF EXISTS `epl_final_project`.`owners`;
CREATE TABLE `owners` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `date_of_birth` DATE DEFAULT NULL,
  `net_worth` double DEFAULT NULL,
PRIMARY KEY (`id`));



Players:
Represents soccer players
Can exist without teams
“last_name” doesn’t have to be unique but cannot be NULL
If “injured” = true, the player is injured. Default value is false
“strongfoot” must be a valid value from enumeration table Strongfeet

DROP TABLE IF EXISTS `epl_final_project`.`players`;
CREATE TABLE `players` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) NOT NULL,
  `position` varchar(45) DEFAULT NULL,
  `injured` BOOLEAN DEFAULT false,
  `height_centimeters` int DEFAULT NULL,
  `weight_kilograms` int DEFAULT NULL,
  `strongfoot` varchar(45) DEFAULT NULL,
  `birth_year` int DEFAULT NULL,
  PRIMARY KEY (`id`));



Strongfeet:
Enumeration table: represents all allowable values for “strongfoot” in players table

DROP TABLE IF EXISTS `epl_final_project`.`strongfeet`;
CREATE TABLE `strongfeet` (
	`strongfoot` varchar(45) NOT NULL,
PRIMARY KEY (`strongfoot`));
INSERT INTO strongfeet (strongfoot)
VALUES ("right");
INSERT INTO strongfeet (strongfoot)
VALUES ("left");
INSERT INTO strongfeet (strongfoot)
VALUES ("both");

ALTER TABLE `epl_final_project`.`strongfeet`
ADD INDEX `enumerated_strongfoot_idx` (`strongfoot` ASC);
ALTER TABLE `epl_final_project`.`players`
ADD CONSTRAINT `enumerated_strongfoot`
FOREIGN KEY (`strongfoot`) 
REFERENCES `epl_final_project`.`strongfeet` (`strongfoot`)
ON DELETE NO ACTION
ON UPDATE NO ACTION;



Leagues:
Enumeration table: represents all allowable values for “league” in teams table

DROP TABLE IF EXISTS `epl_final_project`.`leagues`;
CREATE TABLE `leagues` (
	`league` varchar(45) NOT NULL,
PRIMARY KEY (`league`));

INSERT INTO leagues (league)
VALUES ("English_Premier_League");
INSERT INTO leagues (league)
VALUES ("EFL_Championship");
INSERT INTO leagues (league)
VALUES ("La_Liga");
INSERT INTO leagues (league)
VALUES ("Bundesliga");
INSERT INTO leagues (league)
VALUES ("Serie_A");
INSERT INTO leagues (league)
VALUES ("Major_League_Soccer");
INSERT INTO leagues (league)
VALUES ("Liga_MX");
INSERT INTO leagues (league)
VALUES ("International");



Teams:
Represents soccer teams

DROP TABLE IF EXISTS `epl_final_project`.`teams`;
CREATE TABLE `teams` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `league` varchar(45) DEFAULT NULL,
  `league_ranking` int DEFAULT NULL,
  `stadium` varchar(45) DEFAULT NULL,
  `owner_id` int DEFAULT NULL,
PRIMARY KEY (`id`),
INDEX `teams_to_owner_idx` (`owner_id` ASC),
  CONSTRAINT `teams_to_owner`
   FOREIGN KEY (`owner_id`)
   REFERENCES `epl_final_project`.`owners` (`id`)
   ON DELETE SET NULL
   ON UPDATE CASCADE);

ALTER TABLE `epl_final_project`.`leagues`
ADD INDEX `enumerated_league_idx` (`league` ASC);
ALTER TABLE `epl_final_project`.`teams`
ADD CONSTRAINT `enumerated_league`
FOREIGN KEY (`league`) 
REFERENCES `epl_final_project`.`leagues` (`league`)
ON DELETE NO ACTION
ON UPDATE NO ACTION;
  


Rosters:
Association class: represents a rostered player
Foreign key “team_id” references primary key “teams.id”
Foreign key “player_id” references primary key “players.id”
Allows for multiple players to be on a team and for a player to be on multiple teams

DROP TABLE IF EXISTS `epl_final_project`.`rosters`;
CREATE TABLE `rosters` (
  `id` int NOT NULL AUTO_INCREMENT,
  `player_number` int DEFAULT NULL,
  `player_id` int DEFAULT NULL,
  `team_id` int DEFAULT NULL,
PRIMARY KEY (`id`),
INDEX `rosters_to_player_idx` (`player_id` ASC),
  CONSTRAINT `rosters_to_player`
   FOREIGN KEY (`player_id`)
   REFERENCES `epl_final_project`.`players` (`id`)
   ON DELETE CASCADE
   ON UPDATE CASCADE,
INDEX `rosters_to_team_idx` (`team_id` ASC),
  CONSTRAINT `rosters_to_team`
   FOREIGN KEY (`team_id`)
   REFERENCES `epl_final_project`.`teams` (`id`)
   ON DELETE CASCADE
   ON UPDATE CASCADE);



Games:
Represents games played between two teams
“matchweek” represents the game week (week 1, week 2, etc)
Foreign key “home_team_id” references primary key “teams.id”
Foreign key “away_team_id” references primary key “teams.id”

DROP TABLE IF EXISTS `epl_final_project`.`games`;
CREATE TABLE `games` (
  `id` int NOT NULL AUTO_INCREMENT,
  `matchweek` int DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  `home_team_id` int DEFAULT NULL,
  `away_team_id` int DEFAULT NULL,
PRIMARY KEY (`id`),
INDEX `games_to_home_team_idx` (`home_team_id` ASC),
  CONSTRAINT `games_to_home_team`
   FOREIGN KEY (`home_team_id`)
   REFERENCES `epl_final_project`.`teams` (`id`)
   ON DELETE CASCADE
   ON UPDATE CASCADE,
INDEX `games_to_away_team_idx` (`away_team_id` ASC),
  CONSTRAINT `games_to_away_team`
   FOREIGN KEY (`away_team_id`)
   REFERENCES `epl_final_project`.`teams` (`id`)
   ON DELETE CASCADE
   ON UPDATE CASCADE);



Goals:
Represents goals scored in each game, by a given rostered player
By relating to the roster id, a goal can be associated with both a player and team at once
Foreign key “game_id” references primary key “games.id”
Foreign key “roster_id” references primary key “rosters.id”

DROP TABLE IF EXISTS `epl_final_project`.`goals`;
CREATE TABLE `goals` (
  `id` int NOT NULL AUTO_INCREMENT,
  `minute` int DEFAULT NULL,
  `game_id` int DEFAULT NULL,
  `roster_id` int DEFAULT NULL,
PRIMARY KEY (`id`),
INDEX `goals_to_game_idx` (`game_id` ASC),
  CONSTRAINT `goals_to_game`
   FOREIGN KEY (`game_id`)
   REFERENCES `epl_final_project`.`games` (`id`)
   ON DELETE CASCADE
   ON UPDATE CASCADE,
INDEX `goals_to_roster_idx` (`roster_id` ASC),
  CONSTRAINT `goals_to_roster`
   FOREIGN KEY (`roster_id`)
   REFERENCES `epl_final_project`.`rosters` (`id`)
   ON DELETE CASCADE
   ON UPDATE CASCADE);
