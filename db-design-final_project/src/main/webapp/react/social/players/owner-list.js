const {Link, useHistory} = window.ReactRouterDOM;

import playersService from "./player-service"
const { useState, useEffect } = React;

const OwnerList = () => {
    const [owners, setOwners] = useState([])
    const history = useHistory()
    useEffect(() => {
        findAllOwners()
    }, [])
    const findAllOwners = () => {
        playersService.findAllOwners()
            .then((data) => {
                setOwners(data)
            })
    }
    return(
        <div>
            <h2>Owner List</h2>
            <button
                onClick={() => history.push("/owners/new")}
                className="btn btn-primary">
                Add Owner
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
                { owners.map((owner) => {
                    //idNum = player.id;
                    return (
                        <li className="list-group-item">
                            <Link to={`/owners/${owner.id}`}>
                                {owner.firstName}
                                {" "}
                                {owner.lastName}
                            </Link>
                            {"           "}
                            <button
                                onClick={() => history.push(`/teams/owners/${owner.id}`)}
                                className="btn btn-success">
                                View Owner Teams
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default OwnerList;