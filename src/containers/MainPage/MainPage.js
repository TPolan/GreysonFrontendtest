import React, {useEffect, useState} from 'react';
import {Container, Grid, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../redux/actions/actions";
import User from "../../components/User/User";

const MainPage = props => {
    const dispatch = useDispatch();
    const [users, setUsers] = useState([]);
    const userArr = useSelector(state => state.users)
    const userList = users.map((user, index) => <User props={user} key={user.id}/>)

    useEffect( () => {
        dispatch(getUsers());
        setUsers(userArr);
        console.log('useEffect two fired')
        console.log(users);
    }, [userArr]);



    return (
        <Container>
            <Typography variant={"h1"}>
                Welcome to our CRUD test
            </Typography>
            <Grid container>
                {userList}
            </Grid>
        </Container>
    )
}

export default MainPage;