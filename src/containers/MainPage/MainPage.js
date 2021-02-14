import React, {useEffect, useState} from 'react';
import {Container, Grid, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../redux/actions/actions";
import User from "../../components/User/User";

const MainPage = () => {
    const dispatch = useDispatch();
    const [users, setUsers] = useState([]);
    const userArr = useSelector(state => state.users);
    const userList = users.map(user => <User name={user.name} surname={user.surname} key={user.id}/>);

    useEffect( () => {
        dispatch(getUsers());
    }, []);
    useEffect( () => {
        setUsers(userArr);
    }, [userArr]);




    return (
        <Container>
            <Typography variant={"h1"}>
                Welcome to our CRUD test
            </Typography>
            <Grid
                container justify={"center"}>
                {userList}
            </Grid>
        </Container>
    )
}

export default MainPage;