const {Link, useHistory} = window.ReactRouterDOM;

import playersService from "./player-service"
const { useState, useEffect } = React;

const PlayerList = () => {
    const [players, setPlayers] = useState([])
    const history = useHistory()
    useEffect(() => {
        findAllPlayers()
        }, [])
    const findAllPlayers = () => {
        playersService.findAllPlayers()
            .then((data) => {
                setPlayers(data)
            })
    }
    return(
        <div>
            <h2>Player List</h2>
            <button
                onClick={() => history.push("/players/new")}
                className="btn btn-primary">
                Add Player
            </button>
            <button
                onClick={() => history.push("/teams")}
                className="btn btn-primary">
                View Teams
            </button>
            <button
                onClick={() => history.push("/goals/leaderboard")}
                className="btn btn-primary">
                View Goal Leaderboard
            </button>
            <button
                onClick={() => history.push("/owners")}
                className="btn btn-primary">
                View Owners
            </button>
            <ul className="list-group">
                { players.map((player) => {
                    //idNum = player.id;
                    return (
                        <li className="list-group-item">
                            <Link to={`/players/${player.id}`}>
                                {player.firstName}
                                {" "}
                                {player.lastName}
                                {" | "}
                                {player.position}
                                {"      "}
                            </Link>
                            <button
                                onClick={() => history.push(`/rosters/players/new/${player.id}`)}
                                className="btn btn-success">
                                Add Player to Team Roster
                            </button>
                            <button
                                onClick={() => history.push(`/teams/players/${player.id}`)}
                                className="btn btn-primary">
                                View Player's Current Teams
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default PlayerList;