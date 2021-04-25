import playersService from "./player-service"
import teamsService from "../teams/team-service";
const { Link, useParams, useHistory } = window.ReactRouterDOM;
const { useState, useEffect } = React;

const GameFormEditor = () => {

    const history = useHistory()
    const [game, setGame] = useState({})
    const {gameId} = useParams();
    const [teams, setTeams] = useState([])

    useEffect(() => {
        if(gameId !== "new") {
            findGameById(gameId)
        }
        findTeams()
    }, [])

    const findGameById = (id) => {
        playersService.findGameById(id)
            .then((data) => {
                setGame(data)
            })
    }

    const findTeams = () => {
        teamsService.findAllTeams()
            .then((data) => {
                setTeams(data)
            })
    }

    const deleteGame = (id) =>
        playersService.deleteGame(id)
            .then(() => history.goBack())

    const createGame = (goal) =>
        playersService.createGame(goal)
            .then(() => history.goBack())

    const updateGame = (id, newGoal) =>
        playersService.updateGame(id, newGoal)
            .then(() => history.goBack())


    return (
        <div>
            <h2>Game Editor</h2>
            <label>Matchweek</label>
            <input
                onChange={(e) =>
                    setGame(game =>
                        ({...game, matchweek: e.target.value}))}
                value={game.matchweek}
                className="form-control"/>
            <label>Home Team ID</label>
            <input
                onChange={(e) =>
                    setGame(game =>
                        ({...game, home_team_id: e.target.value}))}
                value={game.home_team_id}
                className="form-control"/>
            <label>Away Team ID</label>
            <input
                onChange={(e) =>
                    setGame(game =>
                        ({...game, away_team_id: e.target.value}))}
                value={game.away_team_id}
                className="form-control"/>
            <button
                onClick = {() => history.goBack()}
                className="btn btn-warning">
                Cancel
            </button>
            <button
                onClick = {() => deleteGame(game.id)}
                className="btn btn-danger">
                Delete
            </button>
            <button
                onClick={() => updateGame(game.id, game)}
                className="btn btn-primary">
                Save
            </button>
            <button
                onClick={() => createGame(game)}
                className="btn btn-success">
                Create Game
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
        </div>
    )
}

export default GameFormEditor