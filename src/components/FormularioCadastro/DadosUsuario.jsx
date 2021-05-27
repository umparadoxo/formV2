import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

function DadosUsuario({ aoEnviar }) {

    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');

    return (

        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({email, senha});
        }}>
            <TextField
                required
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
                id='email'
                label='Email'
                type='email'
                variant='outlined'
                margin='normal'
                fullWidth
            />

            <TextField
                required
                value={senha}
                onChange={(event) => {
                    setSenha(event.target.value)
                }}
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

