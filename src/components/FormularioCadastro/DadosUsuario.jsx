import React from 'react';
import { TextField, Button } from '@material-ui/core';

function DadosUsuario({ aoEnviar }) {

    return (

        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar();
        }}>
            <TextField
                required
                id='email'
                label='Email'
                type='email'
                variant='outlined'
                margin='normal'
                fullWidth
            />

            <TextField
                required
                id='senha'
                label='Senha'
                type='password'
                variant='outlined'
                margin='normal'
                fullWidth
            />
            <Button
                type='submit'
                variant='contained'
                color='primary'
            >
                Próximo
            </Button>
        </form>



    )
}

export default DadosUsuario;

