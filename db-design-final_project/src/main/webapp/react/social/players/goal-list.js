const {Link, useHistory} = window.ReactRouterDOM;

import playersService from "./player-service"
const { useState, useEffect } = React;

const GoalList = () => {
    const [goals, setGoals] = useState([])
    const [players, setPlayers] = useState([])
    const history = useHistory()

    useEffect(() => {
        findAllGoals();
        findAllGoalScorers();

    }, [])

    const findAllGoals = () => {
        playersService.findAllGoals()
            .then((data) => {
                setGoals(data)
            })
    }

    const findAllGoalScorers = () => {
        playersService.findAllGoalScorers()
            .then((data) => {
                setPlayers(data)
            })
    }

    return(
        <div>
            <h2>Goal List</h2>
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
                onClick={() => history.push("/goals/crud/new")}
                className="btn btn-primary">
                Create New Goal
            </button>
            <button
                onClick={() => history.push("/players")}
                className="btn btn-primary">
                View Players
            </button>
            <ul className="list-group">
                { goals.map((goal) => {
                    const index = goals.indexOf(goal);
                    const player = players[index];
                    return (
                        <li className="list-group-item">
                            <Link to={`/players/${player.id}`}>
                                {player.firstName}
                                {" "}
                                {player.lastName}
                            </Link>
                            {" | "}
                            {player.position}
                            {" | Minute: "}
                            <Link to={`/goals/crud/${goal.id}`}>
                                {goal.minute}
                            </Link>
                            {"'"}
                            {" | Game: "}
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

export default GoalList;