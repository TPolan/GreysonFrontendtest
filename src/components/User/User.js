import React from 'react';
import {Button, Card, CardActions, CardContent, Grid, Typography} from "@material-ui/core";

const User = ({id, name,surname}) => {

    return (
        <Grid item key={id}>
            <Card className='userCard' variant="outlined">
                <CardContent>
                    <Typography className={'userName'} color="textSecondary" gutterBottom variant={"h2"}>
                        Name:{name} {surname}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Delete User</Button>
                    <Button size="small">Update User</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default User;