const {Link, useParams, useHistory} = window.ReactRouterDOM;

import playersService from "./player-service"
const { useState, useEffect } = React;

const GoalLeaderboardList = () => {
    const [players, setPlayers] = useState([])
    const [numGoals, setNumGoals] = useState([])
    const history = useHistory()

    useEffect(() => {
        findTopScorers()
        findTopScorerGoalTotals()
    }, [])

    const findTopScorers = () => {
        playersService.findTopScorers()
            .then((data) => {
                setPlayers(data)
            })
    }
    const findTopScorerGoalTotals = () => {
        playersService.findTopScorerGoalTotals()
            .then((data) => {
                setNumGoals(data)
            })
    }

    return(
        <div>
            <h2>Top Scorers</h2>
            <button
                onClick={() => history.push("/goals")}
                className="btn btn-primary">
                View Goal List
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
                Create New Goal
            </button>
            <h4>Goals Scored | Player Name | Position</h4>
            <ul className="list-group">
                { players.map((player) => {
                    const index = players.indexOf(player);
                    const qty = numGoals[index];
                    return (
                        <li className="list-group-item">
                            {qty}
                            {" | "}
                            <Link to={`/players/goals/${player.id}`}>
                                {player.firstName}
                                {" "}
                                {player.lastName}
                            </Link>
                            {" | "}
                            {player.position}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default GoalLeaderboardList;