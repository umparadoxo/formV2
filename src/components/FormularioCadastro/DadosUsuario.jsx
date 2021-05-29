import React, { useState, useContext } from 'react';
import { TextField, Button } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro'
import UseErros from '../../hooks/useErros';

function DadosUsuario({ aoEnviar }) {

    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = UseErros(validacoes);
    

    return (

        <form onSubmit={(event) => {
            event.preventDefault();
            if (possoEnviar()) {
                aoEnviar({ email, senha });
            }
        }}>
            <TextField
                required
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
                id='email'
                name='email'
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
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                id='senha'
                name='senha'
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

