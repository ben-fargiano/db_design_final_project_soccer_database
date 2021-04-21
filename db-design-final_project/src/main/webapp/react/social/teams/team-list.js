const {Link, useHistory} = window.ReactRouterDOM;

import teamsService from "./team-service"
const { useState, useEffect } = React;

const TeamList = () => {

    const history = useHistory()
    const [teams, setTeams] = useState([])

    useEffect(() => {
        findAllTeams()
        }, [])
    const findAllTeams = () => {
        teamsService.findAllTeams()
            .then((data) => {
                setTeams(data)
            })
    }
    return(
        <div>
            <h2>Team List</h2>
            <button
                onClick={() => history.push("/teams/new")}
                className="btn btn-primary">
                Add Team
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
            <button
                onClick={() => history.push("/owners")}
                className="btn btn-primary">
                View Owners
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

export default TeamList;