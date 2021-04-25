-- INSERT STATEMENTS FOR OWNERS, TEAMS, PLAYERS, GAMES, GOALS
-- populates database with some initial data

-- insert owners
INSERT INTO owners (first_name, last_name, username, password, email, date_of_birth, net_worth)
VALUES ("Stan", "Kroenke", "stantheman10", "b1gstaN40", "s.kroenke@gmail.com", "1947-07-29", 8.2);
INSERT INTO owners (first_name, last_name, username, password, email, date_of_birth, net_worth)
VALUES ("John", "Henry", "JohnnyDollars$$", "money_man_1234", "henry.john@aol.com", "1949-09-13", 2.4);
INSERT INTO owners (first_name, last_name, username, password, email, date_of_birth, net_worth)
VALUES ("Joel", "Glazer", "JGlazer2k", "j15g15j79g79", "bigdogJoel@glazer.com", "1967-03-31", 1.0);
INSERT INTO owners (first_name, last_name, username, password, email, date_of_birth, net_worth)
VALUES ("Roman", "Abramovich", "RomanKingdom", "hotheadz4daw1n", "abramovich_roman@chelsea.com", "1966-10-24", 14.9);
INSERT INTO owners (first_name, last_name, username, password, email, date_of_birth, net_worth)
VALUES ("Ben", "Fargiano", "benf1999", "w1nnerzSince00", "benf@owner.com", "1999-07-16", 11.95);


-- insert teams
INSERT INTO teams (name, league, owner_id)
VALUES ("Arsenal", "English_Premier_League", 1);
INSERT INTO teams (name, league)
VALUES ("Aston Villa", "English_Premier_League");
INSERT INTO teams (name, league)
VALUES ("Brighton and Hove Albion", "English_Premier_League");
INSERT INTO teams (name, league)
VALUES ("Burnley", "English_Premier_League");
INSERT INTO teams (name, league, league_ranking, owner_id)
VALUES ("Chelsea", "English_Premier_League", 4, 4);
INSERT INTO teams (name, league)
VALUES ("Crystal Palace", "English_Premier_League");
INSERT INTO teams (name, league)
VALUES ("Everton", "English_Premier_League");
INSERT INTO teams (name, league)
VALUES ("Fulham", "English_Premier_League");
INSERT INTO teams (name, league)
VALUES ("Leeds United", "English_Premier_League");
INSERT INTO teams (name, league, owner_id)
VALUES ("Leicester City", "English_Premier_League", 5);
INSERT INTO teams (name, league, stadium, owner_id)
VALUES ("Liverpool", "English_Premier_League", "Anfield", 2);
INSERT INTO teams (name, league, league_ranking)
VALUES ("Manchester City", "English_Premier_League", 1);
INSERT INTO teams (name, league, stadium, owner_id)
VALUES ("Manchester United", "English_Premier_League", "Old Trafford", 3);
INSERT INTO teams (name, league)
VALUES ("Newcastle United", "English_Premier_League");
INSERT INTO teams (name, league)
VALUES ("Sheffield United", "English_Premier_League");
INSERT INTO teams (name, league)
VALUES ("Southampton", "English_Premier_League");
INSERT INTO teams (name, league, stadium, owner_id)
VALUES ("Tottenham Hotspur", "English_Premier_League", "Tottenham Hotspur Stadium", 5);
INSERT INTO teams (name, league)
VALUES ("West Bromwich Albion", "English_Premier_League");
INSERT INTO teams (name, league)
VALUES ("West Ham United", "English_Premier_League");
INSERT INTO teams (name, league)
VALUES ("Wolverhampton Wanderers", "English_Premier_League");

INSERT INTO teams (name, league, league_ranking, owner_id)
VALUES ("Borussia Dortmund", "Bundesliga", 5, 5);
INSERT INTO teams (name, league, owner_id)
VALUES ("Borussia Monchengladbach", "Bundesliga", 1);
INSERT INTO teams (name, league, league_ranking, stadium)
VALUES ("Bayern Munich", "Bundesliga", 1, "Allianz Arena");
INSERT INTO teams (name, league, league_ranking)
VALUES ("RB Leipzig", "Bundesliga", 2);

INSERT INTO teams (name, league, league_ranking)
VALUES ("Juventus", "Serie_A", 2);
INSERT INTO teams (name, league, league_ranking)
VALUES ("Napoli", "Serie_A", 1);
INSERT INTO teams (name, league, league_ranking, stadium)
VALUES ("AC Milan", "Serie_A", 3, "San Siro");
INSERT INTO teams (name, league)
VALUES ("Inter Milan", "Serie_A");
INSERT INTO teams (name, league)
VALUES ("Lazio", "Serie_A");
INSERT INTO teams (name, league)
VALUES ("Roma", "Serie_A");
INSERT INTO teams (name, league)
VALUES ("Atalanta", "Serie_A");

INSERT INTO teams (name, league, league_ranking)
VALUES ("LA Galaxy", "Major_League_Soccer", 3);
INSERT INTO teams (name, league)
VALUES ("Atlanta United", "Major_League_Soccer");
INSERT INTO teams (name, league)
VALUES ("Seatle Sounders FC", "Major_League_Soccer");
INSERT INTO teams (name, league, owner_id)
VALUES ("New York Red Bulls", "Major_League_Soccer", 5);

INSERT INTO teams (name, league, stadium)
VALUES ("FC Barcelona", "La_Liga", "Camp Nou");
INSERT INTO teams (name, league, owner_id)
VALUES ("Atletico Madrid", "La_Liga", 5);
INSERT INTO teams (name, league)
VALUES ("Athletic Bilbao", "La_Liga");
INSERT INTO teams (name, league, stadium, owner_id)
VALUES ("Real Madrid", "La_Liga", "Santiago Bernabeu", 4);
INSERT INTO teams (name, league, owner_id)
VALUES ("Valencia CF", "La_Liga", 1);

INSERT INTO teams (name, league, owner_id)
VALUES ("Cruz Azul", "Liga_MX", 4);
INSERT INTO teams (name, league)
VALUES ("CF Monterrey", "Liga_MX");
INSERT INTO teams (name, league)
VALUES ("Club America", "Liga_MX");
INSERT INTO teams (name, league)
VALUES ("Tigres", "Liga_MX");

INSERT INTO teams (name, league)
VALUES ("Spain", "International");
INSERT INTO teams (name, league)
VALUES ("United States", "International");
INSERT INTO teams (name, league)
VALUES ("Italy", "International");
INSERT INTO teams (name, league)
VALUES ("Portugal", "International");
INSERT INTO teams (name, league)
VALUES ("England", "International");
INSERT INTO teams (name, league)
VALUES ("Brazil", "International");
INSERT INTO teams (name, league)
VALUES ("Germany", "International");

-- Arsenal Roster
INSERT INTO players (first_name, last_name, position)
VALUES ("Bernd", "Leno", "GK");
INSERT INTO players (first_name, last_name, position, strongfoot)
VALUES ("Kieran", "Tierney", "LB", "left");
INSERT INTO players (first_name, last_name, position, strongfoot)
VALUES ("David", "Luiz", "CB", "right");
INSERT INTO players (first_name, last_name, position)
VALUES ("Bukayo", "Saka", "LM");
INSERT INTO players (first_name, last_name, position)
VALUES ("Nicolas", "Pepe", "RM");
INSERT INTO players (first_name, last_name, position)
VALUES ("Eddie", "Nketiah", "RS");
INSERT INTO players (last_name, position, injured, height_centimeters)
VALUES ("Willian", "RM", true, 175);
INSERT INTO players (first_name, last_name, position, height_centimeters, weight_kilograms)
VALUES ("Pierre-Emerick", "Aubameyang", "CF", 195, 80);
INSERT INTO players (first_name, last_name, position, weight_kilograms)
VALUES ("Alexandre", "Lacazette", "CF", 75);
INSERT INTO players (first_name, last_name, position, strongfoot)
VALUES ("Granit", "Xhaka", "CM", "both");
INSERT INTO players (first_name, last_name, position)
VALUES ("Thomas", "Partey", "CM");
INSERT INTO players (first_name, last_name, position)
VALUES ("Dani", "Ceballos", "CM");
INSERT INTO players (first_name, last_name, position)
VALUES ("Rob", "Holding", "CB");

INSERT INTO rosters (player_number, player_id, team_id)
VALUES (1, 1, 1);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (3, 2, 1);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (23, 3, 1);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (7, 4, 1);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (19, 5, 1);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (30, 6, 1);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (12, 7, 1);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (14, 8, 1);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (9, 9, 1);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (34, 10, 1);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (18, 11, 1);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (8, 12, 1);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (16, 13, 1);

-- Aston Villa Roster
INSERT INTO players (first_name, last_name, position, weight_kilograms)
VALUES ("Tom", "Heaton", "GK", 80);
INSERT INTO players (first_name, last_name, position)
VALUES ("Emiliano", "Martinez", "GK");
INSERT INTO players (first_name, last_name, position)
VALUES ("Ezri", "Konsa", "CB");
INSERT INTO players (first_name, last_name, position)
VALUES ("Matt", "Targett", "LB");
INSERT INTO players (first_name, last_name, position)
VALUES ("Ahmed", "El Mohamady", "CB");
INSERT INTO players (first_name, last_name, position)
VALUES ("Tyrone", "Mings", "CB");
INSERT INTO players (first_name, last_name, position)
VALUES ("Matthew", "Cash", "RB");
INSERT INTO players (first_name, last_name, position)
VALUES ("John", "McGinn", "CAM");
INSERT INTO players (first_name, last_name, position)
VALUES ("Jack", "Grealish", "LM");
INSERT INTO players (first_name, last_name, position)
VALUES ("Douglas", "Luiz", "CDM");
INSERT INTO players (last_name, position, strongfoot)
VALUES ("Trezeguet", "CM", "right");
INSERT INTO players (first_name, last_name, position, weight_kilograms)
VALUES ("Ollie", "Watkins", "CF", 76);
INSERT INTO players (first_name, last_name, position)
VALUES ("Bertrand", "Traore", "RM");
INSERT INTO players (first_name, last_name, position)
VALUES ("Jacob", "Ramsey", "LM");

INSERT INTO rosters (player_number, player_id, team_id)
VALUES (1, 14, 2);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (26, 15, 2);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (4, 16, 2);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (18, 17, 2);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (27, 18, 2);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (5, 19, 2);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (2, 20, 2);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (7, 21, 2);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (10, 22, 2);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (6, 23, 2);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (17, 24, 2);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (11, 25, 2);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (15, 26, 2);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (41, 27, 2);

-- BHA Roster
INSERT INTO players (first_name, last_name, position)
VALUES ("Thomas", "McGill", "GK");
INSERT INTO players (first_name, last_name, position, injured)
VALUES ("Adam", "Webster", "CB", true);
INSERT INTO players (first_name, last_name, position)
VALUES ("Tariq", "Lamptey", "LB");
INSERT INTO players (first_name, last_name, position)
VALUES ("Lewis", "Dunk", "CB");
INSERT INTO players (first_name, last_name, position)
VALUES ("Dan", "Burn", "CB");
INSERT INTO players (first_name, last_name, position)
VALUES ("Yves", "Bissouma", "CM");
INSERT INTO players (first_name, last_name, position)
VALUES ("Pascal", "Gross", "CM");
INSERT INTO players (first_name, last_name, position, strongfoot)
VALUES ("Adam", "Lallana", "RM", "right");
INSERT INTO players (first_name, last_name, position)
VALUES ("Solly", "March", "LM");
INSERT INTO players (first_name, last_name, position)
VALUES ("Neal", "Maupay", "CF");
INSERT INTO players (first_name, last_name, position)
VALUES ("Leandro", "Trossard", "LM");
INSERT INTO players (first_name, last_name, position)
VALUES ("Aaron", "Connolly", "RS");
INSERT INTO players (first_name, last_name, position, injured)
VALUES ("Danny", "Welbeck", "LS", true);

INSERT INTO rosters (player_number, player_id, team_id)
VALUES (61, 28, 3);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (4, 29, 3);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (2, 30, 3);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (5, 31, 3);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (33, 32, 3);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (8, 33, 3);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (13, 34, 3);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (14, 35, 3);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (20, 36, 3);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (9, 37, 3);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (11, 38, 3);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (7, 39, 3);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (18, 40, 3);

-- Burnley Roster
INSERT INTO players (first_name, last_name, position)
VALUES ("Nick", "Pope", "GK");
INSERT INTO players (first_name, last_name, position)
VALUES ("Matthew", "Lowton", "CB");
INSERT INTO players (first_name, last_name, position)
VALUES ("James", "Tarkowski", "RB");
INSERT INTO players (first_name, last_name, position)
VALUES ("Ben", "Mee", "CB");
INSERT INTO players (first_name, last_name, position)
VALUES ("Kevin", "Long", "LB");
INSERT INTO players (first_name, last_name, position)
VALUES ("Jack", "Cork", "CM");
INSERT INTO players (first_name, last_name, position)
VALUES ("Johann", "Gudmundsson", "CM");
INSERT INTO players (first_name, last_name, position, injured)
VALUES ("Robbie", "Brady", "CM", true);
INSERT INTO players (first_name, last_name, position)
VALUES ("Dwight", "McNeil", "CAM");
INSERT INTO players (first_name, last_name, position)
VALUES ("Chris", "Wood", "CF");
INSERT INTO players (first_name, last_name, position)
VALUES ("Jay", "Rodriguez", "RS");
INSERT INTO players (first_name, last_name, position)
VALUES ("Matej", "Vydra", "LS");

INSERT INTO rosters (player_number, player_id, team_id)
VALUES (1, 41, 4);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (2, 42, 4);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (5, 43, 4);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (6, 44, 4);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (28, 45, 4);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (4, 46, 4);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (7, 47, 4);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (12, 48, 4);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (11, 49, 4);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (9, 50, 4);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (19, 51, 4);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (27, 52, 4);


-- Chelsea Roster
INSERT INTO players (first_name, last_name, position)
VALUES ("Edouard", "Mendy", "GK");
INSERT INTO players (first_name, last_name, position)
VALUES ("Antonio", "Rudiger", "CB");
INSERT INTO players (first_name, last_name, position)
VALUES ("Marcos", "Alonso", "RB");
INSERT INTO players (first_name, last_name, position)
VALUES ("Reece", "James", "RB");
INSERT INTO players (first_name, last_name, position, strongfoot)
VALUES ("Ben", "Chilwell", "LB", "left");
INSERT INTO players (first_name, last_name, position, strongfoot)
VALUES ("Thiago", "Silva", "CB", "right");
INSERT INTO players (first_name, last_name, position)
VALUES ("N'Golo", "Kante", "CDM");
INSERT INTO players (first_name, last_name, position)
VALUES ("Mateo", "Kovacic", "CM");
INSERT INTO players (first_name, last_name, position, strongfoot)
VALUES ("Mason", "Mount", "CAM", "right");
INSERT INTO players (first_name, last_name, position, strongfoot, birth_year)
VALUES ("Christian", "Pulisic", "RM", "right", 1998);
INSERT INTO players (first_name, last_name, position)
VALUES ("Timo", "Werner", "RS");
INSERT INTO players (first_name, last_name, position, birth_year)
VALUES ("Tammy", "Abraham", "LS", 1997);
INSERT INTO players (first_name, last_name, position, strongfoot)
VALUES ("Olivier", "Giroud", "CF", "left");

INSERT INTO rosters (player_number, player_id, team_id)
VALUES (16, 53, 5);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (2, 54, 5);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (3, 55, 5);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (24, 56, 5);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (21, 57, 5);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (6, 58, 5);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (7, 59, 5);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (17, 60, 5);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (19, 61, 5);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (10, 62, 5);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (11, 63, 5);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (9, 64, 5);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (18, 65, 5);


-- Crystal Palace Roster
INSERT INTO players (first_name, last_name, position)
VALUES ("Vicente", "Guaita", "GK");
INSERT INTO players (first_name, last_name, position)
VALUES ("Patrick", "van Aanholt", "CB");
INSERT INTO players (first_name, last_name, position)
VALUES ("Mamadou", "Sakho", "CB");
INSERT INTO players (first_name, last_name, position, birth_year)
VALUES ("Tyrick", "Mitchell", "RB", 1997);
INSERT INTO players (first_name, last_name, position)
VALUES ("Andros", "Townsend", "LM");
INSERT INTO players (first_name, last_name, position)
VALUES ("Jeffrey", "Schlupp", "CM");
INSERT INTO players (first_name, last_name, position)
VALUES ("Jordan", "Ayew", "CF");
INSERT INTO players (first_name, last_name, position)
VALUES ("Wilfried", "Zaha", "LS");
INSERT INTO players (first_name, last_name, position)
VALUES ("Christian", "Benteke", "RS");

INSERT INTO rosters (player_number, player_id, team_id)
VALUES (31, 66, 6);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (3, 67, 6);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (12, 68, 6);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (27, 69, 6);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (10, 70, 6);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (15, 71, 6);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (9, 72, 6);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (11, 73, 6);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (20, 74, 6);

-- Everton Roster
INSERT INTO players (first_name, last_name, position)
VALUES ("Jordan", "Pickford", "GK");
INSERT INTO players (first_name, last_name, position)
VALUES ("Lucas", "Digne", "LB");
INSERT INTO players (first_name, last_name, position)
VALUES ("Yerry", "Mina", "CB");
INSERT INTO players (first_name, last_name, position)
VALUES ("Gylfi", "Sigurdsson", "CM");
INSERT INTO players (last_name, position)
VALUES ("Richarlison", "LS");
INSERT INTO players (first_name, last_name, position)
VALUES ("Dominic", "Calvert-Lewin", "CF");
INSERT INTO players (first_name, last_name, position)
VALUES ("James", "Rodriguez", "LM");

INSERT INTO rosters (player_number, player_id, team_id)
VALUES (1, 75, 7);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (12, 76, 7);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (13, 77, 7);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (10, 78, 7);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (7, 79, 7);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (9, 80, 7);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (19, 81, 7);

-- Leeds Roster
INSERT INTO players (first_name, last_name, position)
VALUES ("Illan", "Meslier", "GK");
INSERT INTO players (first_name, last_name, position)
VALUES ("Luke", "Ayling", "LB");
INSERT INTO players (first_name, last_name, position)
VALUES ("Ezgjan", "Alioski", "LM");
INSERT INTO players (first_name, last_name, position)
VALUES ("Stuart", "Dallas", "CM");
INSERT INTO players (first_name, last_name, position)
VALUES ("Jack", "Harrison", "CM");
INSERT INTO players (first_name, last_name, position)
VALUES ("Patrick", "Bamford", "CF");
INSERT INTO players (last_name, position)
VALUES ("Raphinha", "RM");

INSERT INTO rosters (player_number, player_id, team_id)
VALUES (1, 82, 9);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (2, 83, 9);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (10, 84, 9);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (15, 85, 9);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (22, 86, 9);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (9, 87, 9);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (18, 88, 9);

-- Leicester City Roster
INSERT INTO players (first_name, last_name, position)
VALUES ("Kasper", "Schmeichel", "GK");
INSERT INTO players (first_name, last_name, position)
VALUES ("James", "Justin", "RB");
INSERT INTO players (first_name, last_name, position)
VALUES ("Jonny", "Evans", "CB");
INSERT INTO players (first_name, last_name, position)
VALUES ("Daniel", "Amartey", "CM");
INSERT INTO players (first_name, last_name, position)
VALUES ("James", "Maddison", "CAM");
INSERT INTO players (first_name, last_name, position)
VALUES ("Youri", "Tielemans", "CDM");
INSERT INTO players (first_name, last_name, position)
VALUES ("Harvey", "Barnes", "RM");
INSERT INTO players (first_name, last_name, position)
VALUES ("Jamie", "Vardy", "CF");
INSERT INTO players (first_name, last_name, position)
VALUES ("Kelechi", "Iheanacho", "CF");

INSERT INTO rosters (player_number, player_id, team_id)
VALUES (1, 89, 10);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (2, 90, 10);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (6, 91, 10);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (18, 92, 10);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (10, 93, 10);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (8, 94, 10);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (15, 95, 10);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (9, 96, 10);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (14, 97, 10);

-- Liverpool Roster
INSERT INTO players (first_name, last_name, position)
VALUES ("Alisson", "Becker", "GK");
INSERT INTO players (first_name, last_name, position, injured)
VALUES ("Virgil", "van Dijk", "CB", true);
INSERT INTO players (first_name, last_name, position)
VALUES ("Andy", "Robertson", "LB");
INSERT INTO players (first_name, last_name, position)
VALUES ("Trent", "Alexander-Arnold", "RB");
INSERT INTO players (last_name, position)
VALUES ("Fabinho", "CDM");
INSERT INTO players (first_name, last_name, position)
VALUES ("Roberto", "Firmino", "CF");
INSERT INTO players (first_name, last_name, position)
VALUES ("Mohamed", "Salah", "RM");
INSERT INTO players (first_name, last_name, position)
VALUES ("Sadio", "Mane", "LM");
INSERT INTO players (first_name, last_name, position)
VALUES ("Diogo", "Jota", "CF");

INSERT INTO rosters (player_number, player_id, team_id)
VALUES (1, 98, 11);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (4, 99, 11);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (26, 100, 11);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (66, 101, 11);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (3, 102, 11);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (9, 103, 11);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (11, 104, 11);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (10, 105, 11);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (20, 106, 11);

-- England Roster
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (1, 75, 49);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (66, 101, 49);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (10, 61, 49);

-- Brazil Roster
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (1, 98, 50);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (20, 103, 50);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (3, 58, 50);


-- Real Madrid, Brazil
INSERT INTO players (last_name, position)
VALUES ("Casemiro", "CDM");
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (5, 107, 50);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (14, 107, 39);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (22, 7, 50);

-- US Roster
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (10, 62, 46);

-- Germany Roster
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (3, 54, 51);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (12, 63, 51);

-- Grealish, DCL, Chilwell to England
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (22, 22, 49);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (21, 57, 49);
INSERT INTO rosters (player_number, player_id, team_id)
VALUES (9, 80, 49);

-- insert games
INSERT INTO games (matchweek, home_team_id, away_team_id)
VALUES (1, 1, 10);
INSERT INTO games (matchweek, home_team_id, away_team_id)
VALUES (1, 5, 9);
INSERT INTO games (matchweek, home_team_id, away_team_id)
VALUES (1, 2, 11);
INSERT INTO games (matchweek, home_team_id, away_team_id)
VALUES (1, 12, 13);
INSERT INTO games (matchweek, home_team_id, away_team_id)
VALUES (2, 13, 10);
INSERT INTO games (matchweek, home_team_id, away_team_id)
VALUES (2, 12, 2);
INSERT INTO games (matchweek, home_team_id, away_team_id)
VALUES (2, 6, 12);
INSERT INTO games (matchweek, home_team_id, away_team_id)
VALUES (3, 13, 4);
INSERT INTO games (matchweek, home_team_id, away_team_id)
VALUES (3, 6, 5);
INSERT INTO games (matchweek, home_team_id, away_team_id)
VALUES (3, 12, 10);

INSERT INTO games (matchweek, home_team_id, away_team_id)
VALUES (3, 1, 10);
INSERT INTO games (matchweek, home_team_id, away_team_id)
VALUES (4, 5, 9);
INSERT INTO games (matchweek, home_team_id, away_team_id)
VALUES (4, 2, 11);
INSERT INTO games (matchweek, home_team_id, away_team_id)
VALUES (4, 12, 13);
INSERT INTO games (matchweek, home_team_id, away_team_id)
VALUES (5, 13, 10);
INSERT INTO games (matchweek, home_team_id, away_team_id)
VALUES (5, 12, 2);
INSERT INTO games (matchweek, home_team_id, away_team_id)
VALUES (5, 6, 11);
INSERT INTO games (matchweek, home_team_id, away_team_id)
VALUES (5, 8, 4);
INSERT INTO games (matchweek, home_team_id, away_team_id)
VALUES (5, 7, 5);
INSERT INTO games (matchweek, home_team_id, away_team_id)
VALUES (6, 12, 10);
INSERT INTO games (matchweek, home_team_id, away_team_id)
VALUES (6, 1, 2);
INSERT INTO games (matchweek, home_team_id, away_team_id)
VALUES (6, 3, 4);
INSERT INTO games (matchweek, home_team_id, away_team_id)
VALUES (6, 5, 6);
INSERT INTO games (matchweek, home_team_id, away_team_id)
VALUES (6, 6, 4);
INSERT INTO games (matchweek, home_team_id, away_team_id)
VALUES (6, 5, 3);
INSERT INTO games (matchweek, home_team_id, away_team_id)
VALUES (7, 7, 2);
INSERT INTO games (matchweek, home_team_id, away_team_id)
VALUES (7, 9, 5);
INSERT INTO games (matchweek, home_team_id, away_team_id)
VALUES (7, 11, 4);

-- international games
INSERT INTO games (home_team_id, away_team_id)
VALUES (45, 46);
INSERT INTO games (home_team_id, away_team_id)
VALUES (47, 48);
INSERT INTO games (home_team_id, away_team_id)
VALUES (49, 50);
INSERT INTO games (home_team_id, away_team_id)
VALUES (46, 45);
INSERT INTO games (home_team_id, away_team_id)
VALUES (47, 49);
INSERT INTO games (home_team_id, away_team_id)
VALUES (48, 50);


-- insert goals
INSERT INTO goals (minute, game_id, roster_id)
VALUES (81, 1, 8);
INSERT INTO goals (minute, game_id, roster_id)
VALUES (89, 1, 8);
INSERT INTO goals (minute, game_id, roster_id)
VALUES (90, 1, 9);
INSERT INTO goals (minute, game_id, roster_id)
VALUES (36, 2, 61);
INSERT INTO goals (minute, game_id, roster_id)
VALUES (45, 2, 60);
INSERT INTO goals (minute, game_id, roster_id)
VALUES (81, 2, 87);
INSERT INTO goals (minute, game_id, roster_id)
VALUES (82, 2, 87);
INSERT INTO goals (minute, game_id, roster_id)
VALUES (87, 2, 62);
INSERT INTO goals (minute, game_id, roster_id)
VALUES (89, 2, 63);
INSERT INTO goals (minute, game_id, roster_id)
VALUES (89, 2, 63);
INSERT INTO goals (minute, game_id, roster_id)
VALUES (15, 3, 27);

INSERT INTO goals (minute, game_id, roster_id)
VALUES (16, 5, 96);
INSERT INTO goals (minute, game_id, roster_id)
VALUES (26, 5, 95);
INSERT INTO goals (minute, game_id, roster_id)
VALUES (78, 5, 96);
INSERT INTO goals (minute, game_id, roster_id)
VALUES (17, 11, 2);
INSERT INTO goals (minute, game_id, roster_id)
VALUES (19, 11, 36);
INSERT INTO goals (minute, game_id, roster_id)
VALUES (67, 11, 38);
INSERT INTO goals (minute, game_id, roster_id)
VALUES (73, 11, 8);
INSERT INTO goals (minute, game_id, roster_id)
VALUES (83, 11, 8);
INSERT INTO goals (minute, game_id, roster_id)
VALUES (85, 30, 63);
INSERT INTO goals (minute, game_id, roster_id)
VALUES (47, 31, 63);
INSERT INTO goals (minute, game_id, roster_id)
VALUES (61, 31, 27);
