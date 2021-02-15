const initialState = {
    users: [],
    userDetail: {}
}

const gameReducer = (state = initialState, action) => {
    const {payload, type} = action;
    switch (type) {
        case 'GET_USERS':
            return {
                ...state,
                users: [...payload]
            }
        case 'DELETE_USER':
            return {
                ...state,
                users: [...payload]
            }
        case 'ADD_USER':
            return {
                ...state,
                users: [
                    ...state.users,
                    {...payload}
                ]
            }
        case 'GET_DETAIL':
            return {
                ...state,
                userDetail: {...payload}
            }
        default:
            return state
    }
}
export default gameReducer;