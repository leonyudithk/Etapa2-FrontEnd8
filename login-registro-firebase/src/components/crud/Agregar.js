import React from 'react';
import { Button, Form, Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { addAsyn } from '../../redux/actions/actionPlantas';
import { fileUploas } from '../helpers/FileUploas';
import Listar from './Listar';

const Agregar = () => {

    const dispatch = useDispatch()

    let [values, handleInputChange, reset] = useForm({
       nombre: '',
       codigo: '',
       descripcion: '', 
       precio: '',
       foto: ''

    })
    const { nombre, codigo, descripcion, precio, foto } = values

    const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch(addAsyn(values))
        console.log(nombre, codigo, descripcion, precio, foto)
        reset()
    }
    const handleFileChange =(e)=>{
        const file = e.target.files[0]
        fileUploas(file)
            .then(resp =>{
               values.foto = resp
                console.log(resp)
            })
            .catch(error =>{
                console.log(error.message)
            })
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
                    <Form.Control type="text" name="precio" placeholder="El precio en Pesos Colomb iano" value={precio} onChange={handleInputChange} />
                

                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="file" name="foto" placeholder="Ingrese Foto.jpg" onChange={handleFileChange} />
                
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