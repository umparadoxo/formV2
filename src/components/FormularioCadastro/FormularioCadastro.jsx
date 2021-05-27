import React, { useState } from 'react';
import { DadosPessoais } from '../FormularioCadastro/DadosPessoais';
import { DadosUsuario } from '../FormularioCadastro/DadosUsuario';

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