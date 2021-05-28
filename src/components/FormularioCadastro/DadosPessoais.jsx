import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core'

//As funções renderizam o retorno 
function DadosPessoais({ aoEnviar, validacoes }) {

    //Hooks para gerenciar o estado das variáveis inseridas no formulário
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({ cpf: { valido: true, texto: '' }, nome: { valido: true, texto: '' } });


    function validarCampos(event) {
        const { name, value } = event.target;
        const novoEstado = { ...erros }
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado);
    }

    function possoEnviar() {
        for (let campo in erros) {
            if (!erros[campo].valido) {
                return false
            }
        }
        return true;
    }

    return (
        <form
            onSubmit={(event => {
                event.preventDefault();
                if (possoEnviar()) {
                    aoEnviar({ nome, sobrenome, cpf, novidades, promocoes });
                }
            })}
        >
            <TextField
                required
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                onBluer={validarCampos}
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
                variant='outlined'
                id='nome'
                name='nome'
                label='Nome'
                fullWidth
                margin='normal'
            />

            <TextField
                required
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
                variant='outlined'
                id='sobrenome'
                name='sobrenome'
                label='Sobrenome'
                fullWidth
                margin='normal'
            />

            <TextField
                required
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                variant='outlined'
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                onBlur={validarCampos}
                id='cpf'
                name='cpf'
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

            <Button variant='contained' color='primary' type='submit'>
                Próximo
            </Button>
        </form>
    )
}

export default DadosPessoais;