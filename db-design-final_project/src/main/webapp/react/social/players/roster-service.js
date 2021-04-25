// declare URL where server listens for HTTP requests
const PLAYERS_URL = "http://localhost:8081/api/players"
const ROSTERS_URL = "http://localhost:8081/api/rosters"
const PLAYER_NUMBERS_URL = "http://localhost:8081/api/teams/playersnumbers"
const PLAYER_ROSTERS_URL = "http://localhost:8081/api/rosters/playersrosters"


// retrieve all users from the server
export const findAllRosters = () => {
    return fetch(ROSTERS_URL)
        .then(response => response.json())
}

// retrieve all users from the server
export const findRosterById = (uid) => {
    return fetch(`${ROSTERS_URL}/find/${uid}`)
        .then(response => response.json())
}

// delete a roster by its ID
const deleteRoster = (rosterId) =>
    fetch(`${ROSTERS_URL}/${rosterId}`, {
        method: "DELETE"
    })


// create a new user
export const createRoster = (roster) =>
    fetch(ROSTERS_URL, {
        method: "POST",
        body: JSON.stringify(roster),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// update a user by their ID
export const updateRoster = (id, roster) =>
    fetch(`${PLAYERS_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify(roster),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())




// export all functions as the API to this service
export default {
    findAllRosters,
    findRosterById,
    deleteRoster,
    createRoster,
    updateRoster
}