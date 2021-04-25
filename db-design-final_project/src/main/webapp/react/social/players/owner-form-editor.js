import playersService from "./player-service"
const { useParams, useHistory } = window.ReactRouterDOM;
const { useState, useEffect } = React;

const OwnerFormEditor = () => {

    const history = useHistory()
    const [owner, setOwner] = useState({})
    const {ownerId} = useParams();

    useEffect(() => {
        if(ownerId !== "new") {
            findOwnerById(ownerId)
        }
    }, [])

    const findOwnerById = (id) => {
        playersService.findOwnerById(id)
            .then((data) => {
                setOwner(data)
            })
    }

    const deleteOwner = (id) =>
        playersService.deleteOwner(id)
            .then(() => history.goBack())

    const createOwner = (owner) =>
        playersService.createOwner(owner)
            .then(() => history.goBack())

    const updateOwner = (id, newOwner) =>
        playersService.updateOwner(id, newOwner)
            .then(() => history.goBack())


    return (
        <div>
            <h2>Owner Editor</h2>
            <label>First Name</label>
            <input
                onChange={(e) =>
                    setOwner(owner =>
                        ({...owner, firstName: e.target.value}))}
                value={owner.firstName}
                className="form-control"/>
            <label>Last Name</label>
            <input
                onChange={(e) =>
                    setOwner(owner =>
                        ({...owner, lastName: e.target.value}))}
                value={owner.lastName}
                className="form-control"/>
            <label>Username</label>
            <input
                onChange={(e) =>
                    setOwner(owner =>
                        ({...owner, username: e.target.value}))}
                value={owner.username}
                className="form-control"/>
            <label>Password</label>
            <input
                onChange={(e) =>
                    setOwner(owner =>
                        ({...owner, password: e.target.value}))}
                value={owner.password}
                className="form-control"/>
            <label>Email</label>
            <input
                onChange={(e) =>
                    setOwner(owner =>
                        ({...owner, email: e.target.value}))}
                value={owner.email}
                className="form-control"/>
            <label>Date of Birth (YYYY-MM-DD)</label>
            <input
                onChange={(e) =>
                    setOwner(owner =>
                        ({...owner, date_of_birth: e.target.value}))}
                value={owner.date_of_birth}
                className="form-control"/>
            <label>Net Worth (in billions USD)</label>
            <input
                onChange={(e) =>
                    setOwner(owner =>
                        ({...owner, net_worth: e.target.value}))}
                value={owner.net_worth}
                className="form-control"/>
            <button
                onClick = {() => history.goBack()}
                className="btn btn-warning">
                Cancel
            </button>
            <button
                onClick = {() => deleteOwner(owner.id)}
                className="btn btn-danger">
                Delete
            </button>
            <button
                onClick={() => updateOwner(owner.id, owner)}
                className="btn btn-primary">
                Save
            </button>
            <button
                onClick={() => createOwner(owner)}
                className="btn btn-success">
                Create Owner
            </button>
        </div>
    )
}

export default OwnerFormEditor