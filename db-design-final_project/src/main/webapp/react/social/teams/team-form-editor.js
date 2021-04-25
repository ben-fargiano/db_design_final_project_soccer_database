import teamsService from "./team-service"
const { useParams, useHistory } = window.ReactRouterDOM;
const { useState, useEffect } = React;

const TeamFormEditor = () => {

        const history = useHistory()
        const [team, setTeam] = useState({})
        const {teamId} = useParams();

        useEffect(() => {
                if(teamId !== "new") {
                        findTeamById(teamId)
                }
        }, [])

        const findTeamById = (id) => {
            teamsService.findTeamById(id)
                    .then((data) => {
                            setTeam(data)
                    })
        }

        const deleteTeam = (id) =>
            teamsService.deleteTeam(id)
                .then(() => history.goBack())

        const createTeam = (team) =>
            teamsService.createTeam(team)
                .then(() => history.goBack())

        const updateTeam = (id, newTeam) =>
            teamsService.updateTeam(id, newTeam)
                .then(() => history.goBack())


        return (
        <div>
            <h2>Team Editor</h2>
            <label>Name</label>
                <input
                    onChange={(e) =>
                        setTeam(team =>
                            ({...team, name: e.target.value}))}
                    value={team.name}
                    className="form-control"/>
            <label>League</label>
                <input
                    onChange={(e) =>
                        setTeam(team =>
                            ({...team, league: e.target.value}))}
                    value={team.league}
                    className="form-control"/>
            <label>Ranking</label>
                <input
                    onChange={(e) =>
                        setTeam(team =>
                            ({...team, ranking: e.target.value}))}
                    value={team.ranking}
                    className="form-control"/>
            <label>Owner</label>
            <input
                onChange={(e) =>
                    setTeam(team =>
                        ({...team, owner_id: e.target.value}))}
                value={team.owner_id}
                className="form-control"/>
            <button
                onClick = {() => history.push(`/teams/roster/${team.id}`)}
                className="btn btn-primary">
                View Team Players
            </button>
            <button
                onClick = {() => history.push(`/owners/${team.owner_id}`)}
                className="btn btn-primary">
                Edit Team Owner
            </button>
            <button
                onClick = {() => history.goBack()}
                    className="btn btn-warning">
                    Cancel
            </button>
            <button
                onClick = {() => deleteTeam(team.id)}
                    className="btn btn-danger">
                    Delete
            </button>
            <button
                onClick={() => updateTeam(team.id, team)}
                className="btn btn-primary">
                    Save
            </button>
            <button
                onClick={() => createTeam(team)}
                className="btn btn-success">
                    Create
            </button>
        </div>
    )
}

export default TeamFormEditor
