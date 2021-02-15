import React from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";

const UserDetail = ({id}) => {

    return (
        <>
            <Card>
                <CardActionArea>
                    <CardMedia

                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
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
            );
            }
        </>
    )
}

export default UserDetail;