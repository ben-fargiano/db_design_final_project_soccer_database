const {Link, useHistory} = window.ReactRouterDOM;

import teamsService from "./team-service"
const { useState, useEffect } = React;

const LeagueList = () => {

    const history = useHistory()
    const [leagues, setLeagues] = useState([])

    useEffect(() => {
        findAllLeagues()
    }, [])
    const findAllLeagues = () => {
        teamsService.findAllLeagues()
            .then((data) => {
                setLeagues(data)
            })
    }
    return(
        <div>
            <h2>League List</h2>
            <h4>Select a League to View It's Teams</h4>
            <button
                onClick={() => history.push("/teams")}
                className="btn btn-primary">
                View All Teams
            </button>
            <button
                onClick={() => history.push("/players")}
                className="btn btn-primary">
                View All Players
            </button>
            <ul className="list-group">
                { leagues.map((league) => {
                    //idNum = team.id;
                    return (
                        <li className="list-group-item">
                            <Link to={`/teams/leagues/${league}`}>
                                {league}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default LeagueList;