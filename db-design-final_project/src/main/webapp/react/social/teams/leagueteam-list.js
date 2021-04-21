const {Link, useParams, useHistory} = window.ReactRouterDOM;

import teamsService from "./team-service"
const { useState, useEffect } = React;

const LeagueTeamList = () => {

    const history = useHistory()
    const [teams, setTeams] = useState([])
    const leagueName = useParams();

    useEffect(() => {
        findAllTeamsInLeague(leagueName)
    }, [])
    const findAllTeamsInLeague = (leagueName) => {
        teamsService.findAllTeamsInLeague(leagueName)
            .then((data) => {
                setTeams(data)
            })
    }
    return(
        <div>
            <h2>{leagueName} Teams</h2>
            <button
                onClick={() => history.push("/teams")}
                className="btn btn-primary">
                View All Teams
            </button>
            <button
                onClick={() => history.push("/leagues")}
                className="btn btn-primary">
                View All Leagues
            </button>
            <button
                onClick={() => history.push("/players")}
                className="btn btn-primary">
                View All Players
            </button>
            <ul className="list-group">
                { teams.map((team) => {
                    //idNum = team.id;
                    return (
                        <li className="list-group-item">
                            <Link to={`/teams/${team.id}`}>
                                {team.id}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default LeagueTeamList;