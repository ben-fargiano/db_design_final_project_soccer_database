const {Link, useParams, useHistory} = window.ReactRouterDOM;

import playersService, {findGoalsByPlayer} from "./player-service"
const { useState, useEffect } = React;

const GoalPlayerList = () => {
    const [goals, setGoals] = useState([])
    const [player, setPlayer] = useState([])
    const history = useHistory()
    const {playerId} = useParams();

    useEffect(() => {
        findPlayerById(playerId)
        findGoalsByPlayer(playerId)
    }, [])

    const findGoalsByPlayer = (playerId) => {
        playersService.findGoalsByPlayer(playerId)
            .then((data) => {
                setGoals(data)
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
            <h2>{player.firstName} {" "} {player.lastName} {" Goals Scored"}</h2>
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
                onClick={() => history.push("/goals/crud/new")}
                className="btn btn-primary">
                Add New Goal
            </button>
            <ul className="list-group">
                { goals.map((goal) => {
                    return (
                        <li className="list-group-item">
                            {"Minute: "}
                            <Link to={`/goals/crud/${goal.id}`}>
                                {goal.minute}
                            </Link>
                            {" | Game ID: "}
                            <Link to={`/games/crud/${goal.game_id}`}>
                                {goal.game_id}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default GoalPlayerList;