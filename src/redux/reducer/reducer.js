const initialState = {
    users: [],

}

const gameReducer = (state = initialState, action) => {
    const {payload, type} = action;
    switch (type) {
        case 'GET_USERS':
            return {
                ...state,
                users: [...payload]

            }
        default:
            return state
    }
}
export default gameReducer;