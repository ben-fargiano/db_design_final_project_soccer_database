Canvas Group: Database Design 20
Project Name: Soccer Roster Management Database

Team Member: Ben Fargiano (working alone)
CS 3200, Section 04

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


User Interface Requirements:
The user interface I have developed using Reactjs features the following screens:
- Owner-List : shows all owners in a list, links to Owner-Form-Editor and Owner-Teams-List
- Owner-Form-Editor : CRUD screen that allows for editing an owner's attributes
- OwnerTeam-List : shows all teams for a specific owner in a list, links to Team-Form-Editor, Player-List, Team-List, Owner-List
- Team-List : shows all teams in a list, links to Team-Form-Editor, Owner-List, Player-List, League-List (static)
- Team-Form-Editor : CRUD screen that allows for editing an team's attributes
- Player-List : shows all players in a list, links to Roster-Form-Editor, Goal-Leaderboard-List, PlayerTeam-List, Owner-List, Team-List, Player-Form-Editor
- Player-Team-List : shows all teams associated with a given player in a list, links to Player-List, Team-List, League-List, Team-Form-Editor
- Player-Form-Editor : CRUD screen that allows for editing an player's attributes
- Goal-Leaderboard-List : displays goal totals for each player, links to Goal-List, Goal-Form-Editor, Owner-List, Team-List, Player-List
- Goal-List : shows a list of all goals, links to Goal-Leaderboad-List, Goal-Form-Editor, Owner-List, Team-List, Player-List, Player-Form-Editor
- League-List : static list of Leagues (used as portable enumeration values in Teams table), links to Team-List and Player-List


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
	`id` int NOT NULL AUTO_INCREMENT,
	`league` varchar(45) NOT NULL,
	`country` varchar(45),
PRIMARY KEY (`id`));

INSERT INTO leagues (league, country)
VALUES ("English Premier League", "England");
INSERT INTO leagues (league, country)
VALUES ("EFL Championship", "England");
INSERT INTO leagues (league, country)
VALUES ("La Liga", "Spain");
INSERT INTO leagues (league, country)
VALUES ("Bundesliga", "Germany");
INSERT INTO leagues (league, country)
VALUES ("Serie A", "Italy");
INSERT INTO leagues (league, country)
VALUES ("Major League Soccer", "United States");
INSERT INTO leagues (league, country)
VALUES ("Liga MX", "Mexico");
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
