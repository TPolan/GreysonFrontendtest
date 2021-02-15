import React from 'react';
import {NavLink} from "react-router-dom";
import {Button, ButtonGroup} from "@material-ui/core";

const NavBar = props => {

    return (
        <>
            <ButtonGroup variant="contained" color="grey" aria-label="contained primary button group">
                <Button><NavLink to='/'> Users </NavLink></Button>
                <Button><NavLink to='/user/add'> Add User </NavLink></Button>
            </ButtonGroup>
        </>
    )
}

export default NavBar;