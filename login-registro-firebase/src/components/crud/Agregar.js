import React from 'react';
import { Button, Form, Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { addAsyn } from '../../redux/actions/actionPlantas';
import Listar from './Listar';

const Agregar = () => {

    const dispatch = useDispatch()

    const [values, handleInputChange, reset] = useForm({
       nombre: '',
       codigo: '',
       descripcion: '', 
       precio: ''

    })
    const { nombre, codigo, descripcion, precio } = values

    const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch(addAsyn(values))
        console.log(nombre, codigo, descripcion, precio)
        reset()
    }

    return (
        <div>
          <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre de la Planta</Form.Label>
                    <Form.Control type="text" name="nombre" placeholder="Enter nombre" value={nombre} onChange={handleInputChange} />

                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control type="text" name="descripcion" placeholder="Enter descripcion" value={descripcion} onChange={handleInputChange} />

                    <Form.Label>Codigo</Form.Label>
                    <Form.Control type="text" name="codigo" placeholder="El codigo contine dos letras y 3 numeros" value={codigo} onChange={handleInputChange} />

                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="text" name="precio" placeholder="El precio en Pesos Colombiano" value={precio} onChange={handleInputChange} />
                
                </Form.Group>

                <Button type="submit">
                    <Image width={40} src='https://res.cloudinary.com/danimel/image/upload/v1646016294/anadir_eitgpy.png' />
                </Button>
            </Form>
            <Listar/>
        </div>
    );
};

export default Agregar;