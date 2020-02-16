export const GET_TEAMS = "GET_TEAMS";
export const EDIT_DETAILS = "EDIT_DETAILS";
export const SET_INDEX = "SET_INDEX";


export const getTeamsAPI = async (dispatch, type) => {
    const teams = await fetch("/getTeams.json", { method: "GET" }).then(res => res.json());
    dispatch({type, payload: teams});
};

export const editDetails = (teams, payload) => {
    return teams.map((currentMember) => {
        if(payload.id === currentMember.id) {
            return {
                ...currentMember,
                name: payload.name,
                email: payload.email,
                address: {
                    ...currentMember.address,
                    city: payload.city
                },
                phone: payload.phone,
                website: payload.website,
                company: {
                    ...currentMember.company,
                    name: payload.companyName
                }
            };
        }
        return currentMember;
    });
}