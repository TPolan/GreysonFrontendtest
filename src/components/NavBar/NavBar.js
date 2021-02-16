import React from 'react';
import {NavLink} from "react-router-dom";
import {Button, ButtonGroup} from "@material-ui/core";

const NavBar = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "blueGrey"
    }

    return (
            <ButtonGroup variant="contained" color="grey" aria-label="contained primary button group">
                <Button>
                    <NavLink
                        to='/'
                        activeStyle={activeStyle}
                        exact
                    >
                        Users
                    </NavLink>
                </Button>
                <Button>
                    <NavLink
                        to='/user/add'
                        activeStyle={activeStyle}
                        exact
                    >
                        Add User
                    </NavLink>
                </Button>
            </ButtonGroup>
    )
}

export default NavBar;