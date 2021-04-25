// declare URL where server listens for HTTP requests
const TEAMS_URL = "http://localhost:8081/api/teams"
const LEAGUES_URL = "http://localhost:8081/api/teams/leagues"

// retrieve all users from the server
export const findAllTeams = () => {
    return fetch(TEAMS_URL)
        .then(response => response.json())
}

// retrieve all users from the server
export const findAllLeagues = () => {
    return fetch(LEAGUES_URL)
        .then(response => response.json())
}

// retrieve all users from the server
export const findAllTeamsInLeague = (leagueName) => {
    return fetch(`${LEAGUES_URL}/${leagueName}`)
        .then(response => response.json())
}

export const findPlayerTeams = (pid) => {
    return fetch(`${TEAMS_URL}/players/${pid}`)
        .then(response => response.json())
}

export const findRosteredPlayers = (uid) => {
    return fetch(`${TEAMS_URL}/roster/${uid}`)
        .then(response => response.json())
}

// retrieve a single user by their ID
export const findTeamById = (uid) => {
    return fetch(`${TEAMS_URL}/find/${uid}`)
        .then(response => response.json())
}

// delete a user by their ID
export const deleteTeam = (id) =>
    fetch(`${TEAMS_URL}/${id}`, {
        method: "DELETE"
    })


// create a new user
export const createTeam = (team) =>
    fetch(TEAMS_URL, {
        method: "POST",
        body: JSON.stringify(team),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// update a user by their ID
export const updateTeam = (id, team) =>
    fetch(`${TEAMS_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify(team),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// export all functions as the API to this service
export default {
    findAllLeagues,
    findAllTeamsInLeague,
    findPlayerTeams,
    findAllTeams,
    findTeamById,
    deleteTeam,
    createTeam,
    updateTeam,
    findRosteredPlayers
}
