import React, { useEffect } from "react";
import DisplayCards from "./DisplayCards";
import { Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { GET_TEAMS, getTeamsAPI }  from "../actions/TeamActions";

function Teams() {
    const teams = useSelector(state => state.TeamsReducer.teams);
    const dispatch = useDispatch();

    useEffect(() => {
        getTeamsAPI(dispatch, GET_TEAMS);
    }, [dispatch])

    const loading = () => <Spinner animation="grow" variant="info"></Spinner>;
    const loadTeamMembers = () => <DisplayCards />;

    return <div>
        { !teams.length ? loading() : loadTeamMembers() }
    </div>
}

export default Teams;