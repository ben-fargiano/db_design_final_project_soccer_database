-- fails to be added, since the foreign key constraint for league fails
INSERT INTO teams (name, league)
VALUES ("FC Koln", "Nonexistant league");

-- fails to be added, since the foreign key constraint for strongfoot fails
INSERT INTO players (last_name, strongfoot)
VALUES ("Fargiano", "nofoot");