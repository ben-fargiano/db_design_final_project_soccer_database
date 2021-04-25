// declare URL where server listens for HTTP requests
const PLAYERS_URL = "http://localhost:8081/api/players"
const GOALS_URL = "http://localhost:8081/api/goals"
const GAMES_URL = "http://localhost:8081/api/games"
const GOAL_SCORERS_URL = "http://localhost:8081/api/goals/players"
const GOAL_TEAMS_URL = "http://localhost:8081/api/goals/teams"
const OWNERS_URL = "http://localhost:8081/api/owners"
const OWNER_TEAMS_URL = "http://localhost:8081/api/teams/owners"
const ROSTERS_POST_URL = "http://localhost:8081/api/rosters"
const ROSTERS_URL = "http://localhost:8081/api/teams/roster/players"
const PLAYER_NUMBERS_URL = "http://localhost:8081/api/teams/playersnumbers"
const PLAYER_ROSTERS_URL = "http://localhost:8081/api/rosters/playersrosters"



// retrieve all players from the server
export const findAllPlayers = () => {
    return fetch(PLAYERS_URL)
        .then(response => response.json())
}

// retrieve all players from the server
export const findTeamRosters = (uid) => {
    return fetch(`${PLAYER_ROSTERS_URL}/${uid}`)
        .then(response => response.json())
}

export const findPlayersByTeamId = (uid) => {
    return fetch(`${ROSTERS_URL}/${uid}`)
        .then(response => response.json())
}

export const findPlayerNumbers = (uid) => {
    return fetch(`${PLAYER_NUMBERS_URL}/${uid}`)
        .then(response => response.json())
}

export const findTopScorers = () => {
    return fetch(`${PLAYERS_URL}/topscorers`)
        .then(response => response.json())
}

export const findTopScorerGoalTotals = () => {
    return fetch(`${GOALS_URL}/goaltotals`)
        .then(response => response.json())
}

//retrieve a single player by their ID
export const findPlayerById = (uid) => {
    return fetch(`${PLAYERS_URL}/find/${uid}`)
        .then(response => response.json())
}

//retrieve a single player by their ID
export const findOwnerById = (uid) => {
    return fetch(`${OWNERS_URL}/${uid}`)
        .then(response => response.json())
}

//retrieve a single player by their ID
export const findAllOwners = () => {
    return fetch(OWNERS_URL)
        .then(response => response.json())
}

//retrieve a single player by their ID
export const findAllGoals = () => {
    return fetch(GOALS_URL)
        .then(response => response.json())
}

//retrieve all games by their ID
export const findAllGames = () => {
    return fetch(GAMES_URL)
        .then(response => response.json())
}

//retrieve a single goal by its ID
export const findGoalById = (id) => {
    return fetch(`${GOALS_URL}/find/${id}`)
        .then(response => response.json())
}

//retrieve a single game by their ID
export const findGameById = (id) => {
    return fetch(`${GAMES_URL}/find/${id}`)
        .then(response => response.json())
}

export const findAllGoalScorers = () => {
    return fetch(GOAL_SCORERS_URL)
        .then(response => response.json())
}

export const findGoalsByPlayer = (id) => {
    return fetch(`${GOAL_SCORERS_URL}/${id}`)
        .then(response => response.json())
}
export const findGoalsByTeam = (id) => {
    return fetch(`${GOAL_TEAMS_URL}/${id}`)
        .then(response => response.json())
}
// delete a player by their ID
const deleteOwner = (id) =>
    fetch(`${OWNERS_URL}/${id}`, {
        method: "DELETE"
    })

// delete a player by their ID
const deletePlayer = (id) =>
    fetch(`${PLAYERS_URL}/${id}`, {
        method: "DELETE"
    })

// delete a roster by its ID
const deleteRoster = (rosterId) =>
    fetch(`${ROSTERS_URL}/${rosterId}`, {
        method: "DELETE"
    })

// delete a roster by its ID
const deleteGoal = (goalId) =>
    fetch(`${GOALS_URL}/${goalId}`, {
        method: "DELETE"
    })

// delete a game by its ID
const deleteGame = (gameId) =>
    fetch(`${GAMES_URL}/${gameId}`, {
        method: "DELETE"
    })


// create a new player
export const createRoster = (roster) =>
    fetch(ROSTERS_POST_URL, {
        method: "POST",
        body: JSON.stringify(roster),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// update a player by their ID
export const updateRoster = (id, roster) =>
    fetch(`${ROSTERS_POST_URL}/find/${id}`, {
        method: "PUT",
        body: JSON.stringify(roster),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())



// create a new player
export const createPlayer = (player) =>
    fetch(PLAYERS_URL, {
        method: "POST",
        body: JSON.stringify(player),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// create a new owner
export const createOwner = (owner) =>
    fetch(OWNERS_URL, {
        method: "POST",
        body: JSON.stringify(owner),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// create a new goal
export const createGoal = (goal) =>
    fetch(GOALS_URL, {
        method: "POST",
        body: JSON.stringify(goal),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// create a new goal
export const createGame = (game) =>
    fetch(GAMES_URL, {
        method: "POST",
        body: JSON.stringify(game),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// retrieve all players from the server
export const findRosterById = (uid) => {
    return fetch(`${ROSTERS_POST_URL}/find/${uid}`)
        .then(response => response.json())
}

// retrieve all players from the server
export const findAllRosters = () => {
    return fetch(`${ROSTERS_POST_URL}`)
        .then(response => response.json())
}

// find all teams by owner
export const findTeamsByOwner = (id) => {
    return fetch(`${OWNER_TEAMS_URL}/${id}`)
        .then(response => response.json())
}

// update a player by their ID
export const updatePlayer = (id, player) =>
    fetch(`${PLAYERS_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify(player),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// update an owner by their ID
export const updateOwner = (id, owner) =>
    fetch(`${OWNERS_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify(owner),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// update a goal by its ID
export const updateGoal = (id, goal) =>
    fetch(`${GOALS_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify(goal),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// update a game by its ID
export const updateGame = (id, game) =>
    fetch(`${GAMES_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify(game),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())





// export all functions as the API to this service
export default {
    findAllGames,
    findGameById,
    updateGame,
    createGame,
    deleteGame,
    findGoalsByTeam,
    findTopScorers,
    findTopScorerGoalTotals,
    createGoal,
    updateGoal,
    deleteGoal,
    findGoalById,
    findAllGoals,
    findAllGoalScorers,
    findGoalsByPlayer,
    createOwner,
    updateOwner,
    deleteOwner,
    findOwnerById,
    findTeamsByOwner,
    findAllOwners,
    findAllRosters,
    findRosterById,
    createRoster,
    updateRoster,
    deleteRoster,
    findTeamRosters,
    findPlayersByTeamId,
    findPlayerNumbers,
    findAllPlayers,
    findPlayerById,
    deletePlayer,
    createPlayer,
    updatePlayer
}