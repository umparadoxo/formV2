import React, { useEffect, useState } from 'react';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';
import { Stepper, Typography, Step, StepLabel } from '@material-ui/core';

//As funções renderizam o retorno 
function FormularioCadastro({ aoEnviar, validacoes }) {

    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});

    useEffect(() => {
        if (etapaAtual === formularios.length - 1) {
            aoEnviar(dadosColetados)
        }
    })

    const formularios = [
        <DadosUsuario aoEnviar={coletarDados} validacoes={validacoes} />,
        <DadosPessoais aoEnviar={coletarDados} validacoes={validacoes} />,
        <DadosEntrega aoEnviar={coletarDados} validacoes={validacoes} />,
        <Typography variant='h5'>Obrigado pelo cadastro! </Typography>
    ];

    function proximo() {
        setEtapaAtual(etapaAtual + 1);
    }

    function coletarDados(dados) {
        setDados({ ...dadosColetados, ...dados })
        proximo();
    }

    return (
        <>
            <Stepper active={etapaAtual}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Pessoal</StepLabel></Step>
                <Step><StepLabel>Entrega</StepLabel></Step>
                <Step><StepLabel>Finalização</StepLabel></Step>
            </Stepper >
            { formularios[etapaAtual]}
        </>
    );
}

export default FormularioCadastro;