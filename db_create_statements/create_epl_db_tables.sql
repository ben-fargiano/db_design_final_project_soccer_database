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
  
  
  