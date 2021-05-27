import React, { useState } from 'react';
import { DadosPessoais } from './DadosPessoais';
import { DadosUsuario } from './DadosUsuario';

//As funções renderizam o retorno 
function FormularioCadastro({ aoEnviar, validarCPF }) {

    return (
        <>
            <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF} />
            <DadosUsuario />
        </>
    );

}

export default FormularioCadastro;