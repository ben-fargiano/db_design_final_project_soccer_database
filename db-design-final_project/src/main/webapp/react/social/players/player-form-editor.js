import playersService from "./player-service"
const { useParams, useHistory } = window.ReactRouterDOM;
const { useState, useEffect } = React;

const PlayerFormEditor = () => {

        const history = useHistory()
        const [player, setPlayer] = useState({})
        const {playerId} = useParams();

        useEffect(() => {
                if(playerId !== "new") {
                        findPlayerById(playerId)
                }
        }, [])

        const findPlayerById = (id) => {
            playersService.findPlayerById(id)
                    .then((data) => {
                            setPlayer(data)
                    })
        }

        const deletePlayer = (id) =>
            playersService.deletePlayer(id)
                .then(() => history.goBack())

        const createPlayer = (player) =>
            playersService.createPlayer(player)
                .then(() => history.goBack())

        const updatePlayer = (id, newPlayer) =>
            playersService.updatePlayer(id, newPlayer)
                .then(() => history.goBack())


        return (
        <div>
            <h2>Player Editor</h2>
            <label>First Name</label>
                <input
                    onChange={(e) =>
                        setPlayer(player =>
                            ({...player, firstName: e.target.value}))}
                    value={player.firstName}
                    className="form-control"/>
            <label>Last Name</label>
                <input
                    onChange={(e) =>
                        setPlayer(player =>
                            ({...player, lastName: e.target.value}))}
                    value={player.lastName}
                    className="form-control"/>
            <label>Position</label>
                <input
                    onChange={(e) =>
                        setPlayer(player =>
                            ({...player, position: e.target.value}))}
                    value={player.position}
                    className="form-control"/>
            <label>Height (Centimeters)</label>
            <input
                onChange={(e) =>
                    setPlayer(player =>
                        ({...player, heightCentimeters: e.target.value}))}
                value={player.heightCentimeters}
                className="form-control"/>
            <label>Weight (Kilograms)</label>
            <input
                onChange={(e) =>
                    setPlayer(player =>
                        ({...player, weightKilograms: e.target.value}))}
                value={player.weightKilograms}
                className="form-control"/>
            <label>Strong Foot</label>
            <input
                onChange={(e) =>
                    setPlayer(player =>
                        ({...player, strongfoot: e.target.value}))}
                value={player.strongfoot}
                className="form-control"/>
            <label>Injured (true if injured, otherwise false)</label>
            <input
                onChange={(e) =>
                    setPlayer(player =>
                        ({...player, injured: e.target.value}))}
                value={player.injured}
                className="form-control"/>
            <button
                onClick={() => history.push(`/teams/players/${player.id}`)}
                className="btn btn-primary">
                View Player's Current Teams
            </button>
            <button
                onClick = {() => history.goBack()}
                    className="btn btn-warning">
                    Cancel
            </button>
            <button
                onClick = {() => deletePlayer(player.id)}
                    className="btn btn-danger">
                    Delete
            </button>
            <button
                onClick={() => updatePlayer(player.id, player)}
                className="btn btn-primary">
                    Save
            </button>
            <button
                onClick={() => createPlayer(player)}
                className="btn btn-success">
                    Create
            </button>
        </div>
    )
}

export default PlayerFormEditor