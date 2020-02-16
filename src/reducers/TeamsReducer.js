import { GET_TEAMS, SET_INDEX, EDIT_DETAILS, editDetails } from "../actions/TeamActions";

const initialState = {
    teams: [],
    currentSelected: undefined
};

export const TeamsReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_TEAMS: 
            return {
                ...state,
                teams: action.payload
            };
        case SET_INDEX: 
            return {
                ...state,
                currentSelected: action.payload
            };
        case EDIT_DETAILS:
            return {
                ...state,
                teams: editDetails(state.teams, action.payload)
            };
        default:
            return state;
    }
}