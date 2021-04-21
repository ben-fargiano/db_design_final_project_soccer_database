import PlayerList from "./players/player-list";
import PlayerFormEditor from "./players/player-form-editor";
import TeamFormEditor from "./teams/team-form-editor";
import TeamList from "./teams/team-list";
import RosterPlayerList from "./players/rosterplayer-list";
import RosterList from "./players/roster-list";
import RosterFormEditor from "./players/roster-form-editor";
import PlayerTeamList from "./teams/playerteam-list";
import LeagueList from "./teams/league-list";
import LeagueTeamList from "./teams/leagueteam-list";
import OwnerList from "./players/owner-list";
import GoalList from "./players/goal-list";
import OwnerFormEditor from "./players/owner-form-editor";
import OwnerTeamList from "./players/ownerteam-list";
import GoalFormEditor from "./players/goal-form-editor";
import GoalLeaderboardList from "./players/goal-leaderboard-list";
import GoalPlayerList from "./players/goal-player-list";


const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/players", "/"]} exact={true}>
                    <PlayerList/>
                </Route>
                <Route path="/players/:playerId" exact={true}>
                    <PlayerFormEditor/>
                </Route>
                <Route path="/teams/:teamId" exact={true}>
                    <TeamFormEditor/>
                </Route>
                <Route path={["/teams"]} exact={true}>
                    <TeamList/>
                </Route>
                <Route path="/teams/roster/:teamId" exact={true}>
                    <RosterPlayerList/>
                </Route>
                <Route path="/rosters/players/:rosterId/:playerId" exact={true}>
                    <RosterFormEditor/>
                </Route>
                <Route path="/rosters/:rosterId" exact={true}>
                    <RosterFormEditor/>
                </Route>
                <Route path={["/teams/players/:playerId"]} exact={true}>
                    <PlayerTeamList/>
                </Route>
                <Route path="/leagues" exact={true}>
                    <LeagueList/>
                </Route>
                <Route path="/teams/leagues/:leagueName" exact={true}>
                    <LeagueTeamList/>
                </Route>
                <Route path="/rosters" exact={true}>
                    <RosterList/>
                </Route>
                <Route path="/owners" exact={true}>
                    <OwnerList/>
                </Route>
                <Route path="/owners/:ownerId" exact={true}>
                    <OwnerFormEditor/>
                </Route>
                <Route path="/goals" exact={true}>
                    <GoalList/>
                </Route>
                <Route path="/teams/owners/:ownerId" exact={true}>
                    <OwnerTeamList/>
                </Route>
                <Route path="/goals/leaderboard" exact={true}>
                    <GoalLeaderboardList/>
                </Route>
                <Route path="/goals/crud/:goalId" exact={true}>
                    <GoalFormEditor/>
                </Route>
                <Route path="/players/goals/:playerId" exact={true}>
                    <GoalPlayerList/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
