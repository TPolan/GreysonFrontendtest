import React, {useEffect} from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, Grid, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {deleteUser, getUserDetail} from "../../redux/actions/actions";
import {useHistory} from "react-router";
import image from '../../images/user.png'
import './userDetail.css';

const UserDetail = ({id}) => {
    const dispatch = useDispatch();
    const {name, surname, job} = useSelector(state => state.userDetail)
    const history = useHistory();

    useEffect(() => {
        dispatch(getUserDetail(id));
    }, [])

    const handleDelete = () => {
        dispatch(deleteUser(id));
        history.push('/');
    };

    const handleUpdate = () => {
        history.push('/user/update')
    }

    return (
        <Card className={'detailCard'}>
            <Grid container justify={'center'}>
                <Grid item>
                    <img src={image} alt='default user'/>
                    <CardActionArea>
                        <CardContent>
                            <Typography
                                gutterBottom variant="h5"
                                color="textSecondary"
                                component="h2"
                            >
                                Name: {name}
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="h5"
                                color="textSecondary"
                                component="h2"
                            >
                                Surname: {surname}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                Job: {job}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Grid container justify={"center"}>
                            <Grid item>
                                <Button
                                    size="small"
                                    color="primary"
                                    onClick={handleDelete}
                                >
                                    Delete
                                </Button>
                                <Button
                                    size="small"
                                    color="primary"
                                    onClick={handleUpdate}
                                >
                                    Update
                                </Button>
                            </Grid>
                        </Grid>

                    </CardActions>
                </Grid>
            </Grid>
        </Card>
    )
}

export default UserDetail;