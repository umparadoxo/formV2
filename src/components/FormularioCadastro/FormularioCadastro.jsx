import React, { useState } from 'react';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';

//As funções renderizam o retorno 
function FormularioCadastro({ aoEnviar, validarCPF }) {

    return (
        <>
            <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF} />
            <DadosUsuario />
            <DadosEntrega/>
        </>
    );

}

export default FormularioCadastro;