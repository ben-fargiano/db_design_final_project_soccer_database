import playersService from "../players/player-service";

const {Link, useParams, useHistory} = window.ReactRouterDOM;

import teamsService from "./team-service"
const { useState, useEffect } = React;

const PlayerTeamList = () => {

    const history = useHistory()
    const [teams, setTeams] = useState([])
    const [player, setPlayer] = useState([])

    const {playerId} = useParams();

    useEffect(() => {
        findPlayerTeams(playerId)
        findPlayerById(playerId)
    }, [])
    const findPlayerTeams = (playerId) => {
        teamsService.findPlayerTeams(playerId)
            .then((data) => {
                setTeams(data)
            })
    }
    const findPlayerById = (playerId) => {
        playersService.findPlayerById(playerId)
            .then((data) => {
                setPlayer(data)
            })
    }
    return(
        <div>
            <h2>Teams Associated with
                {" "}
                {player.firstName}
                {" "}
                {player.lastName}
            </h2>
            <button
                onClick={() => history.push("/teams")}
                className="btn btn-primary">
                View All Teams
            </button>
            <button
                onClick={() => history.push("/leagues")}
                className="btn btn-primary">
                View Leagues
            </button>
            <button
                onClick={() => history.push("/players")}
                className="btn btn-primary">
                View Players
            </button>
            <ul className="list-group">
                { teams.map((team) => {
                    //idNum = team.id;
                    return (
                        <li className="list-group-item">
                            <Link to={`/teams/${team.id}`}>
                                {team.name}
                            </Link>
                            {" | "}
                            {team.league}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default PlayerTeamList;