
import playersService from "./player-service"
import rostersService from "./roster-service"
import teamsService from "../teams/team-service";
const { useState, useEffect } = React;
const { Link, useParams, useHistory } = window.ReactRouterDOM;

const RosterPlayerList = () => {
    const [players, setPlayers] = useState([])
    const [numbers, setNumbers] = useState([])
    const [rosters, setRosters] = useState([])

    const history = useHistory()

    const {teamId} = useParams();

    useEffect(() => {
        if(teamId !== "new") {
            findPlayersByTeamId(teamId)
            findPlayerNumbers(teamId)
            findTeamRosters(teamId)
        }
    }, [])

    const findPlayersByTeamId = (id) => {
        playersService.findPlayersByTeamId(id)
            .then((data) => {
                setPlayers(data)
            })
    }

    const findPlayerNumbers = (id) => {
        playersService.findPlayerNumbers(id)
            .then((data) => {
                setNumbers(data)
            })
    }

    const findTeamRosters = (id) => {
        playersService.findTeamRosters(id)
            .then((data) => {
                setRosters(data)
            })
    }

    const deleteRoster = (rosterId) =>
        playersService.deleteRoster(rosterId)
            .then(() => history.goBack())

    return(
        <div>
            <h2>Roster</h2>
            <button
                onClick={() => history.push("/players/new")}
                className="btn btn-primary">
                Create Player
            </button>
            <button
                onClick={() => history.push("/players")}
                className="btn btn-primary">
                View Players
            </button>
            <button
                onClick={() => history.push("/teams")}
                className="btn btn-primary">
                View Teams
            </button>
            <ul className="list-group">
                { players.map((player) => {
                    const index = players.indexOf(player);
                    const rosterEntry = rosters[index];
                    //idNum = player.id;
                    return (
                        <li className="list-group-item">
                            <Link to={`/players/${player.id}`}>
                                {player.firstName}
                                {" "}
                                {player.lastName}
                                {/*{"     "}*/}
                                {/*{rosterEntry.id}*/}
                            </Link>
                            {" | "}
                            {player.position}
                            {" | #"}
                            {numbers[index]}
                            {"     "}
                            <button
                                onClick={() => history.push(`/rosters/${rosterEntry.id}`)}
                                className="btn btn-success">
                                Change Player Number
                            </button>
                            <button
                                onClick={() => deleteRoster(rosterEntry.id)}
                                    className="btn btn-danger">
                                    Remove Player From Roster
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default RosterPlayerList;