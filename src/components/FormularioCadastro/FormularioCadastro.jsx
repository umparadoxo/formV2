import React, { useEffect, useState } from 'react';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';

//As funções renderizam o retorno 
function FormularioCadastro({ aoEnviar, validarCPF }) {

    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});

    useEffect(() => {
        console.log(dadosColetados)
    })

    const formularios = [
        <DadosUsuario aoEnviar={coletarDados} />,
        <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF} />,
        <DadosEntrega aoEnviar={coletarDados} />
    ];

    function proximo() {
        setEtapaAtual(etapaAtual + 1);
    }

    function coletarDados(dados) {
        setDados ({ ...dadosColetados, ...dados })
        proximo();
    }

    return (
        <>
            {formularios[etapaAtual]}
        </>
    );

}

export default FormularioCadastro;