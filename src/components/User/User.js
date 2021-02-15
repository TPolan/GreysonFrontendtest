import React from 'react';
import {Button, Card, CardActions, CardContent, Grid, Typography} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {deleteUser} from "../../redux/actions/actions";
import {useHistory} from "react-router";

const User = ({name,surname,id, setDetailId}) => {
    const dispatch = useDispatch()
    const history = useHistory();

    const handleDelete = () => {
        dispatch(deleteUser(id))
    };

    const handleDetail = () => {
        history.push('/user/' + id);
        setDetailId(id);
    };

    return (
        <Grid item>
            <Card className='userCard' variant="outlined">
                <CardContent>
                    <Typography className={'userName'}
                                color="textSecondary"
                                gutterBottom
                                variant={"h3"}
                    >
                        Name:{name} {surname}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        onClick={handleDelete}>
                        Delete
                    </Button>
                    <Button
                        size="small"
                        onClick={handleDetail}>
                        Detail
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default User;