import React, {useEffect, useState} from 'react';
import {Button, Grid, TextField} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {addUser, updateUser} from '../../redux/actions/actions';
import './formPage.css';
import {useLocation} from "react-router";

const FormPage = props => {
    const dispatch = useDispatch();
    const {name: detailName, surname: detailSurname, job: detailJob, id} = useSelector(state => state.userDetail)
    const [updateButton, setButton] = useState(false);
    const [name, setName] = useState(detailName);
    const [surname, setSurname] = useState(detailSurname);
    const [job, setJob] = useState(detailJob);
    const url = useLocation().pathname;
    const handleChange = (event) => {
        switch (event.target.id) {
            case 'name':
                return setName(event.target.value);
            case 'surname':
                return setSurname(event.target.value);
            case 'job':
                return setJob(event.target.value);
        }
    };

    const handleAdd = () => {
        dispatch(addUser({
            name,
            surname,
            job
        }));
        props.history.push('/');
    };

    const handleUpdate = () => {
        dispatch(updateUser({
            id,
            name,
            surname,
            job
        }));
        props.history.push('/');
    };

    useEffect(() => {
        if (url === '/user/update') {
            setButton(true)
            setName(detailName);
            setSurname(detailSurname);
            setJob(detailJob);
        } else {
            setButton(false)
            setName('');
            setSurname('');
            setJob('');
        }
    }, []);

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
                {updateButton ?
                    <Button onClick={handleUpdate} item>Update</Button> :
                    <Button onClick={handleAdd} item>Add</Button>
                }
            </form>
        </Grid>
    )
}

export default FormPage;