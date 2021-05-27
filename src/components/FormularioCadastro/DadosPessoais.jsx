import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core'

//As funções renderizam o retorno 
function DadosPessoais({ aoEnviar, validarCPF }) {

    //Hooks para gerenciar o estado das variáveis inseridas no formulário
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({ cpf: { valido: true, texto: '' } });


    return (
        <form
            onSubmit={(event => {
                event.preventDefault();
                aoEnviar({ nome, sobrenome, cpf, novidades, promocoes });
            })}
        >
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                variant='outlined'
                id='nome'
                label='Nome'
                fullWidth
                margin='normal'
            />

            <TextField
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
                variant='outlined'
                id='sobrenome'
                label='Sobrenome'
                fullWidth
                margin='normal'
            />

            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                variant='outlined'
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                onBlur={(event) => {
                    const ehValido = validarCPF(cpf);
                    setErros({ cpf: ehValido })
                }}
                id='cpf'
                label='CPF'
                fullWidth
                margin='normal'
            />

            <FormControlLabel
                label='Promoções'
                checked={promocoes}
                control={
                    <Switch
                        onChange={event => {
                            setPromocoes(event.target.checked)
                        }}
                        name='promocoes'
                        color='primary'
                    />}
            />

            <FormControlLabel
                label='Novidades'
                checked={novidades}
                control={
                    <Switch
                        onChange={event => {
                            setNovidades(event.target.checked)
                            }
                        }
                        name='novidades'
                        color='primary'
                    />
                }
            />

            <Button
            variant='contained'
            color='primary'
            type='submit'>
                Cadastrar
            </Button>
        </form>
    )
};

export default DadosPessoais;