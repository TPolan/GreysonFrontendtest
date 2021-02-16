import axios from "axios";

export const addUser = payload => {
    return dispatch => {
        axios.post('http://localhost:8888/user', payload)
            .then(response => response.data.id)
            .then(id => {
                dispatch({
                    type: 'ADD_USER',
                    payload: {
                        id,
                        ...payload
                    }
                });
            })
    }
};

export const deleteUser = id => {
    return (dispatch, getState) => {
        const {users} = getState();
        const updatedUsers = users.filter(user => user.id !== id)
        axios.delete('http://localhost:8888/user/' + id)
            .then(() => {
                dispatch({
                    type: 'DELETE_USER',
                    payload: updatedUsers
                });
            })
    }
};

export const getUserDetail = id => {
    return dispatch => {
        axios.get('http://localhost:8888/user/' + id)
            .then(response => response.data)
            .then(data => {
                dispatch({
                    type: 'GET_DETAIL',
                    payload: data
                })
            })
    }
};

export const getUsers = () => {
    return dispatch => {
        axios.get('http://localhost:8888/user')
            .then((response) => dispatch({
                type: 'GET_USERS',
                payload: [...response.data]
            }));
    }
};

export const updateUser = payload => {
    return (dispatch, getState) => {
        const {users} = getState();
        const updatedUsers = users.map(user => {
            if (user.id === payload.id) {
                return user = {...payload}
            }
            return user;
        })
        axios.post('http://localhost:8888/user/' + payload.id, payload)
            .then(response => response.data.id)
            .then(id => {
                dispatch({
                    type: 'UPDATE_USER',
                    payload: updatedUsers
                });
            })
    }
};