import axios from "axios";

export const getUsers = () => {
    return (dispatch) => {
        axios.get('http://localhost:8080/user')
            .then((data)=> dispatch({
                type: 'GET_USERS',
                payload:{
                    ...data
                }
            }))
            .catch((error)=> {
                console.log(error)
            })
    }
};