import playersService, {findGoalById} from "./player-service"
const { useParams, useHistory } = window.ReactRouterDOM;
const { useState, useEffect } = React;

const GoalFormEditor = () => {

    const history = useHistory()
    const [goal, setGoal] = useState({})
    const {goalId} = useParams();

    useEffect(() => {
        if(goalId !== "new") {
            findGoalById(goalId)
        }
    }, [])

    const findGoalById = (id) => {
        playersService.findGoalById(id)
            .then((data) => {
                setGoal(data)
            })
    }

    const deleteGoal = (id) =>
        playersService.deleteGoal(id)
            .then(() => history.goBack())

    const createGoal = (goal) =>
        playersService.createGoal(goal)
            .then(() => history.goBack())

    const updateGoal = (id, newGoal) =>
        playersService.updateGoal(id, newGoal)
            .then(() => history.goBack())


    return (
        <div>
            <h2>Goal Editor</h2>
            <label>Minute</label>
            <input
                onChange={(e) =>
                    setGoal(goal =>
                        ({...goal, minute: e.target.value}))}
                value={goal.minute}
                className="form-control"/>
            <label>Game ID</label>
            <input
                onChange={(e) =>
                    setGoal(goal =>
                        ({...goal, game_id: e.target.value}))}
                value={goal.game_id}
                className="form-control"/>
            <label>Roster ID</label>
            <input
                onChange={(e) =>
                    setGoal(goal =>
                        ({...goal, roster_id: e.target.value}))}
                value={goal.roster_id}
                className="form-control"/>
            <button
                onClick = {() => history.goBack()}
                className="btn btn-warning">
                Cancel
            </button>
            <button
                onClick = {() => deleteGoal(goal.id)}
                className="btn btn-danger">
                Delete
            </button>
            <button
                onClick={() => updateGoal(goal.id, goal)}
                className="btn btn-primary">
                Save
            </button>
            <button
                onClick={() => createGoal(goal)}
                className="btn btn-success">
                Create Goal
            </button>
        </div>
    )
}

export default GoalFormEditor