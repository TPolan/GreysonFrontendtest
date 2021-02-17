import React, {useEffect, useState} from 'react';
import {Container, Grid, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../redux/actions/actions";
import User from "../../components/User/User";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router";
import FormPage from "../FormPage/FormPage";
import NavBar from "../../components/NavBar/NavBar";
import UserDetail from "../../components/UserDetail/UserDetail";

const MainPage = () => {
    const dispatch = useDispatch();
    const [users, setUsers] = useState([]);
    const [detailId, setDetailId] = useState('');
    const userArr = useSelector(state => state.users);
    const userList = users.map(user => <User setDetailId={setDetailId} name={user.name} surname={user.surname} id={user.id} key={user.id}/>);


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
                            container
                            justify={"center"}
                            direction={"column"}
                            alignItems={"center"}
                        >
                            {userList}
                        </Grid>
                    }
                />
                <Route
                    path='/user/add'
                    exact
                    component={FormPage}
                />
                <Route
                    path='/user/update'
                    exact
                    component={FormPage}
                />
                <Route
                    path={`/user/${detailId}`}
                    exact
                    render={()=><UserDetail id={detailId}/>}
                />
            </BrowserRouter>
        </Container>
    )
}

export default MainPage;