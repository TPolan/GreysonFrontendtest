import axios from "axios";

export const getUsers = () => {
    return (dispatch) => {
        axios.get('http://localhost:8888/user')
            .then((response)=> dispatch({
                type: 'GET_USERS',
                payload:[...response.data]
            }))
    }
};