import React from 'react';
import {Button, Card, CardActions, CardContent, Grid, Typography} from "@material-ui/core";

const User = ({name,surname}) => {

    return (
        <Grid item>
            <Card className='userCard' variant="outlined">
                <CardContent>
                    <Typography className={'userName'} color="textSecondary" gutterBottom variant={"h3"}>
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