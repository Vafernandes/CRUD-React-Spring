import React from 'react';
import { Formik, Form, Field } from 'formik';
import api from '../../Service/api';
import Modal from '../Modal';

export default class ListCoursesComponent extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            cursos: [],
            id: '',
            descricao: ''
        }
        
    }


    getCursos() {
        api.get(`http://localhost:8080/anotacoes`)
            .then(response => {
                const cursos = response.data;
                this.setState({ cursos });
            })
    }

    componentDidMount(){
       this.getCursos();
    }

    handleChange = e => {
        this.setState({ descricao: e.target.value })
    }

    cadastrarCurso = e => {
        e.preventDefault();

        api.post(`http://localhost:8080/anotacao`, this.state)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        this.setState({ cursos: [...this.state.cursos, this.state] })
    }

    deleteCurso(id) {
        api.delete(`http://localhost:8080/anotacao/${id}`)
        //.then(res => res.data)
        //.then(rows => console.log(rows))
        //.catch(e => console.log(e))

        this.setState({ cursos: this.state.cursos.filter(c => c.id !== id) })
        
    }

    atualizarCurso(id){
        api.put(`http://localhost:8080/anotacao/${id}`)

        //this.setState({ cursos: this.state.cursos.filter(c => c.id !== id) })
    }

    render(){

        let { id, descricao } = this.state;

        return(
            <div className="container">
                <h3>Todos as anotações</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Descrição</th>
                                <th>Deletar</th>
                                <th>Atualizar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.cursos.map(curso => 
                                    <tr key={curso.id}>
                                        <td>{curso.id}</td>
                                        <td>{curso.descricao}</td>
                                        <td>
                                            <button 
                                                className="btn btn-danger"
                                                onClick={() => this.deleteCurso(curso.id)}
                                            >
                                                    Deletar
                                            </button>
                                        </td>
                                        <td>
                                        <Modal anotacao={descricao}/>
                                        </td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>
                <div className="form">
                    <h3>Cadastrar anotação</h3>
                    <Formik initialValues={{ id, descricao }}>
                        {
                            (props) => (
                                <Form onSubmit={this.cadastrarCurso}>
                                    <fieldset className="form-group" hidden>
                                        <label>ID</label>
                                        <Field className="form-control" type="text" name="id" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Descrição</label>
                                        <Field 
                                            className="form-control" 
                                            type="text" 
                                            name="descricao"
                                            value={this.state.descricao}
                                            onChange={this.handleChange}
                                        />
                                    </fieldset>
                                    <button 
                                        className="btn btn-success"
                                        data-toggle="modal" 
                                        data-target=".bd-example-modal-sm"
                                    >
                                        Cadastrar
                                    </button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
                
            </div>
        );
    }
}