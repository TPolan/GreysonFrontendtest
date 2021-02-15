import React, {useEffect} from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getUserDetail} from "../../redux/actions/actions";

const UserDetail = ({id}) => {
    const dispatch = useDispatch();
    const {name, surname, job} = useSelector(state => state.userDetail)

    useEffect(() => {
        dispatch(getUserDetail(id));
    }, [])

    return (
        <>
            <Card>
                <CardActionArea>
                    <CardMedia
                        style={{height: 500}}
                        image='../../images/user.png'
                        title="default user"
                    />
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
                    <Button size="small" color="primary">
                        Delete
                    </Button>
                    <Button size="small" color="primary">
                        Update
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default UserDetail;