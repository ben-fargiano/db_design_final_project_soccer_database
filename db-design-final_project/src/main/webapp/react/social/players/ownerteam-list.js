const {Link, useParams, useHistory} = window.ReactRouterDOM;

import playerService from "./player-service"
const { useState, useEffect } = React;

const OwnerTeamList = () => {

    const history = useHistory()
    const [teams, setTeams] = useState([])
    const [owner, setOwner] = useState({})
    const {ownerId} = useParams();

    useEffect(() => {
        findTeamsByOwner(ownerId)
        findOwnerById(ownerId)
    }, [])

    const findTeamsByOwner = (ownerId) => {
        playerService.findTeamsByOwner(ownerId)
            .then((data) => {
                setTeams(data)
            })
    }
    const findOwnerById = (ownerId) => {
        playerService.findOwnerById(ownerId)
            .then((data) => {
                setOwner(data)
            })
    }
    return(
        <div>
            <h2>{owner.firstName} {" "} {owner.lastName} Teams</h2>
            <button
                onClick={() => history.push("/owners")}
                className="btn btn-primary">
                View All Owners
            </button>
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

export default OwnerTeamList;