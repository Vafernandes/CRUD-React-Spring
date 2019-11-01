import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

const ModalExample = (props, anotacao) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);

    const handleChange = e => {
        console.log(anotacao);
    }

    return (
        <div>
            <Button color="warning" onClick={toggle}>Editar{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Atualizar anotação</ModalHeader>
                <ModalBody>
                    <Form inline>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="exampleEmail" className="mr-sm-2">Descrição</Label>
                            <Input type="text" 
                            name="email" 
                            id="exampleEmail" 
                            placeholder="Comprar carne" 
                            value={anotacao}
                            onChange={handleChange}
                        />
                        </FormGroup>
                        <Button color="success">Editar</Button>
                    </Form>
                </ModalBody>
                
            </Modal>
        </div>
    );
}

export default ModalExample;