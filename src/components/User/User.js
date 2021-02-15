import React from 'react';
import {Button, Card, CardActions, CardContent, Grid, Typography} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {deleteUser} from "../../redux/actions/actions";

const User = ({name,surname,id}) => {
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteUser(id))
    };

    const handleUpdate = () => {

    };

    return (
        <Grid item>
            <Card className='userCard' variant="outlined">
                <CardContent>
                    <Typography className={'userName'} color="textSecondary" gutterBottom variant={"h3"}>
                        Name:{name} {surname}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handleDelete}>Delete User</Button>
                    <Button size="small">Update User</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default User;