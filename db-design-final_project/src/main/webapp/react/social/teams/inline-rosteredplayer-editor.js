const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineRosteredPlayerEditor = ({rosteredPlayer, deleteRosteredPlayer, updateRosteredPlayer}) => {
    const [rosteredPlayerCopy, setRosteredPlayerCopy] = useState(rosteredPlayer)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={rosteredPlayerCopy.id}
                            onChange={(e)=>setRosteredPlayerCopy(rosteredPlayerCopy => ({...rosteredPlayerCopy, id: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={rosteredPlayerCopy.firstName}
                            onChange={(e)=>setRosteredPlayerCopy(rosteredPlayerCopy => ({...rosteredPlayerCopy, firstName: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={rosteredPlayerCopy.lastName}
                            onChange={(e)=>setRosteredPlayerCopy(rosteredPlayerCopy => ({...rosteredPlayerCopy, lastName: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={rosteredPlayerCopy.position}
                            onChange={(e)=>setRosteredPlayerCopy(rosteredPlayerCopy => ({...rosteredPlayerCopy, position: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={rosteredPlayerCopy.playerNumber}
                            onChange={(e)=>setRosteredPlayerCopy(rosteredPlayerCopy => ({...rosteredPlayerCopy, playerNumber: e.target.value}))}/>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateRosteredPlayer(rosteredPlayerCopy.id, rosteredPlayerCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteRosteredPlayer(rosteredPlayerCopy.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/players/${rosteredPlayerCopy.id}`}>
                            {rosteredPlayerCopy.id}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/players/${rosteredPlayerCopy.id}`}>
                            {rosteredPlayerCopy.firstName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/players/${rosteredPlayerCopy.id}`}>
                            {rosteredPlayerCopy.lastName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/players/${rosteredPlayerCopy.id}`}>
                            {rosteredPlayerCopy.position}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/players/${rosteredPlayerCopy.id}`}>
                            {rosteredPlayerCopy.playerNumber}
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default InlineRosteredPlayerEditor;