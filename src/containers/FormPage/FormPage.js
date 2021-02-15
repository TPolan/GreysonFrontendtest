import React, {useState} from 'react';
import {Button, Grid, TextField} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {addUser} from '../../redux/actions/actions';
import './formPage.css';

const FormPage = props => {
    const dispatch = useDispatch();
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [job, setJob] = useState();

    const handleChange = (event) => {
        switch (event.target.id) {
            case 'name' :
                return setName(event.target.value);
            case 'surname' :
                return setSurname(event.target.value);
            case 'job' :
                return setJob(event.target.value);
        }
    };

    const handleAddUser = () => {
        dispatch(addUser({
            name,
            surname,
            job
        }));
        props.history.push('/');
    };

    return (
        <Grid item className='formPage' container>
            <form noValidate autoComplete='off'>
                <Grid container direction={'column'} item>
                    <TextField
                        id='name'
                        className='name'
                        onChange={(event => handleChange(event))}
                        value={name}
                        label='Name'
                        variant='outlined'
                        item
                    />
                    <TextField
                        id='surname'
                        className='surname'
                        onChange={(event => handleChange(event))}
                        value={surname}
                        label='Surname'
                        variant='outlined'
                        item
                    />
                    <TextField
                        id='job'
                        className='job'
                        onChange={(event => handleChange(event))}
                        value={job}
                        label='Job'
                        variant='outlined'
                        item
                    />
                </Grid>
                <Button onClick={handleAddUser} item>
                    Add User
                </Button>
            </form>
        </Grid>
    )
}

export default FormPage;