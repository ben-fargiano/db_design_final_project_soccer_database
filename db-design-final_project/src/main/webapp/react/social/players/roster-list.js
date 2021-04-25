import playerService from "./player-service";

const {Link, useHistory} = window.ReactRouterDOM;

import playersService from "./player-service"
import {findAllTeams} from "../teams/team-service";
const { useState, useEffect } = React;

const RosterList = () => {

    const history = useHistory()
    const [rosters, setRosters] = useState([])
    const [teams, setTeams] = useState([])
    const [players, setPlayers] = useState([])

    useEffect(() => {
        findAllRosters()
        findTeams()
        findAllPlayers()
    }, [])

    const findAllRosters = () => {
        playersService.findAllRosters()
            .then((data) => {
                setRosters(data)
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

    return(
        <div>
            <h2>Roster Item List</h2>
            <button
                onClick={() => history.push("/teams")}
                className="btn btn-primary">
                View Teams
            </button>
            <button
                onClick={() => history.push("/players")}
                className="btn btn-primary">
                View Players
            </button>
            <button
                onClick={() => history.push("/rosters/new")}
                className="btn btn-primary">
                Create New Roster Item
            </button>
            <h3>Player Number | Player ID | Team ID</h3>
            <ul className="list-group">
                { rosters.map((roster) => {
                    //idNum = team.id;
                    return (
                        <li className="list-group-item">
                            <Link to={`/rosters/${roster.id}`}>
                                {"Player Number: "}
                                {roster.player_number}
                            </Link>
                            {"  |  "}
                            <Link to={`/players/${roster.player_id}`}>
                                {"Player ID: "}
                                {roster.player_id}
                            </Link>
                            {"  |  "}
                            <Link to={`/teams/${roster.team_id}`}>
                                {"Team ID: "}
                                {roster.team_id}
                            </Link>
                        </li>
                    )
                })}
            </ul>
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

export default RosterList;