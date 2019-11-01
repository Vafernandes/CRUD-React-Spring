import React from 'react';
import ListaDeAnotacoes from './ListaDeAnotacoes';

export default class InstructorApp extends React.Component{
    render(){
        return(
            <>
                <h1>Teste de CRUD de anotações</h1>
                <ListaDeAnotacoes />
            </>
        );
    }
}