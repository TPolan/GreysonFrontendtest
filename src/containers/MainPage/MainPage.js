import React, {useEffect, useState} from 'react';
import {Container, Grid, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../redux/actions/actions";
import User from "../../components/User/User";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router";
import FormPage from "../FormPage/FormPage";
import NavBar from "../../components/NavBar/NavBar";

const MainPage = () => {
    const dispatch = useDispatch();
    const [users, setUsers] = useState([]);
    const userArr = useSelector(state => state.users);
    const userList = users.map(user => <User name={user.name} surname={user.surname} id={user.id} key={user.id}/>);

    useEffect(() => {
        dispatch(getUsers());
    }, []);
    useEffect(() => {
        setUsers(userArr);
    }, [userArr]);


    return (
        <Container>
            <Typography variant={"h2"}>
                Welcome to my CRUD app
            </Typography>
            <BrowserRouter>
                <NavBar/>
                <Route
                    path='/'
                    exact
                    render={()=>
                        <Grid
                            container justify={"center"}
                            direction={"column"}
                        >
                            {userList}
                        </Grid>
                    }
                />
                <Route
                    path='/user/add'
                    component={FormPage}
                    exact
                />
                <Route
                    path='/user/update'
                    component={FormPage}
                    exact
                />
                <Route
                    path='/user/detail'
                    component={FormPage}
                    exact
                />
            </BrowserRouter>
        </Container>
    )
}

export default MainPage;