const {Link, useHistory} = window.ReactRouterDOM;

import playersService from "./player-service"
const { useState, useEffect } = React;

const RosterList = () => {

    const history = useHistory()
    const [rosters, setRosters] = useState([])

    useEffect(() => {
        findAllRosters()
    }, [])
    const findAllRosters = () => {
        playersService.findAllRosters()
            .then((data) => {
                setRosters(data)
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
            <h3>Player Number | Player ID | Team ID</h3>
            <ul className="list-group">
                { rosters.map((roster) => {
                    //idNum = team.id;
                    return (
                        <li className="list-group-item">
                            <Link to={`/rosters/${roster.id}`}>
                                {roster.player_number}
                            </Link>
                            {"  |  "}
                            <Link to={`/players/${roster.player_id}`}>
                                {roster.player_id}
                            </Link>
                            {"  |  "}
                            <Link to={`/teams/${roster.team_id}`}>
                                {roster.team_id}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default RosterList;