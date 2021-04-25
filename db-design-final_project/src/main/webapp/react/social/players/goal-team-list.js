const {Link, useParams, useHistory} = window.ReactRouterDOM;

import playersService, {findGoalsByPlayer} from "./player-service"
import teamsService, {findTeamById} from "../teams/team-service"
const { useState, useEffect } = React;

const GoalTeamList = () => {
    const [goals, setGoals] = useState([])
    const [team, setTeam] = useState([])
    const history = useHistory()
    const {teamId} = useParams();

    useEffect(() => {
        findTeamById(teamId)
        findGoalsByTeam(teamId)
    }, [])

    const findGoalsByTeam = (teamId) => {
        playersService.findGoalsByTeam(teamId)
            .then((data) => {
                setGoals(data)
            })
    }

    const findTeamById = (teamId) => {
        teamsService.findTeamById(teamId)
            .then((data) => {
                setTeam(data)
            })
    }

    return(
        <div>
            <h2>{team.name} {" "} {" Goals Scored"}</h2>
            <h4>{team.league}</h4>
            <button
                onClick={() => history.push("/goals/teams/leaderboard")}
                className="btn btn-warning">
                View Team Goal Leaderboard
            </button>
            <button
                onClick={() => history.push("/goals/leaderboard")}
                className="btn btn-success">
                View Individual Goal Leaders
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
            <ul className="list-group">
                { goals.map((goal) => {
                    return (
                        <li className="list-group-item">
                            {"Minute: "}
                            <Link to={`/goals/${goal.id}`}>
                                {goal.minute}
                            </Link>
                            {" | Game ID: "}
                            <Link to={`/games/${goal.game_id}`}>
                                {goal.game_id}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default GoalTeamList;