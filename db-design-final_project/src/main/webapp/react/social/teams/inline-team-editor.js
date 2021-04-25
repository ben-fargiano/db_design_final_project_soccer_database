const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineTeamEditor = ({team, deleteTeam, updateTeam}) => {
    const [teamCopy, setTeamCopy] = useState(team)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={teamCopy.firstName}
                            onChange={(e)=>setTeamCopy(teamCopy => ({...teamCopy, name: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={teamCopy.lastName}
                            onChange={(e)=>setTeamCopy(teamCopy => ({...teamCopy, league: e.target.value}))}/>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateTeam(teamCopy.id, teamCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteTeam(team.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/teams/${teamCopy.id}`}>
                            {teamCopy.name}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/teams/${teamCopy.id}`}>
                            {teamCopy.league}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/teams/${teamCopy.id}`}>
                            {teamCopy.ranking}
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

export default InlineTeamEditor;