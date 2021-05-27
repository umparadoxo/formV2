import React from 'react';
import { TextField, Button } from '@material-ui/core';

function DadosEntrega() {
    return (
        <form>
            <TextField
                required
                id='cep'
                label='CEP'
                type='number'
                variant='outlined'
                margin='normal'
            />

            <TextField
                required
                id='endereco'
                label='Endereço'
                type='text'
                variant='outlined'
                margin='normal'
                fullWidth
            />

            <TextField
                required
                id='numero'
                label='Número'
                type='number'
                variant='outlined'
                margin='normal'
            />

            <TextField
                required
                id='estado'
                label='Estado'
                type='text'
                variant='outlined'
                margin='normal'
            />

            <TextField
                required
                id='cidade'
                label='Cidade'
                type='text'
                variant='outlined'
                margin='normal'
            />

            <Button
                type='submit'
                variant='contained'
                color='primary'
                fullWidth
            >
                Finalizar Cadastro
            </Button>

        </form>
    )
}

export default DadosEntrega;