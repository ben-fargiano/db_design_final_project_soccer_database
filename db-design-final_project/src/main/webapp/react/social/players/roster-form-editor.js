import rosterService from "./roster-service"
import playerService from "./player-service"
import {findAllTeams} from "../teams/team-service";
const { Link, useParams, useHistory } = window.ReactRouterDOM;
const { useState, useEffect } = React;

const RosterFormEditor = () => {

    const history = useHistory()
    const [roster, setRoster] = useState({})
    const {rosterId, playerId} = useParams();
    const [teams, setTeams] = useState([])
    const [players, setPlayers] = useState([])

    useEffect(() => {
        if(rosterId !== "new") {
            findRosterById(rosterId)
            findTeams()
            findAllPlayers()
        }
        else{
            roster.player_id = playerId
            findTeams()
            findAllPlayers()
        }
    }, [])

    const findRosterById = (id) => {
        playerService.findRosterById(id)
            .then((data) => {
                setRoster(data)
            })
    }

    const findAllPlayers = () => {
        playerService.findAllPlayers()
            .then((data) => {
                setPlayers(data)
            })
    }

    const findTeams = () => {
        findAllTeams()
            .then((data) => {
                setTeams(data)
            })
    }

    const createRoster = (roster) =>
        playerService.createRoster(roster)
            .then(() => history.goBack())

    const updateRoster = (id, newRoster) =>
        playerService.updateRoster(id, newRoster)
            .then(() => history.goBack())

    const deleteRoster = (id) =>
        playerService.deleteRoster(id)
            .then(() => history.goBack())


    return (
        <div>
            <h2>Roster Editor</h2>
            <label>Player Jersey #</label>
            <input
                onChange={(e) =>
                    setRoster(roster =>
                        ({...roster, player_number: e.target.value}))}
                value={roster.player_number}
                className="form-control"/>
            <label>Player ID</label>
            <input
                value={roster.player_id}
                onChange={(e) =>
                    setRoster(roster =>
                        ({...roster, player_id: e.target.value}))}
                value={roster.player_id}
                className="form-control"/>
            <label>Team ID</label>
            <input
                onChange={(e) =>
                    setRoster(roster =>
                        ({...roster, team_id: e.target.value}))}
                value={roster.team_id}
                className="form-control"/>

            <button
                onClick = {() => history.push(`/teams/roster/${team.id}`)}
                className="btn btn-primary">
                View Roster Entries
            </button>
            <button
                onClick = {() => history.goBack()}
                className="btn btn-warning">
                Cancel
            </button>
            <button
                onClick = {() => deleteRoster(roster.id)}
                className="btn btn-danger">
                Delete
            </button>
            <button
                onClick={() => updateRoster(roster.id, roster)}
                className="btn btn-primary">
                Save
            </button>
            <button
                onClick={() => createRoster(roster)}
                className="btn btn-success">
                Add to Team
            </button>
            <h2></h2>
            <h2>Team ID Reference Information:</h2>
            <ul className="list-group">
                { teams.map((team) => {
                    //idNum = team.id;
                    return (
                        <li className="list-group-item">
                            {team.id}
                            {" | "}
                            <Link to={`/teams/${team.id}`}>
                                {team.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <h2></h2>
            <h2>Player ID Reference Information:</h2>
            <ul className="list-group">
                { players.map((player) => {
                    //idNum = team.id;
                    return (
                        <li className="list-group-item">
                            {player.id}
                            {" | "}
                            <Link to={`/players/${player.id}`}>
                                {player.firstName}
                                {" "}
                                {player.lastName}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default RosterFormEditor