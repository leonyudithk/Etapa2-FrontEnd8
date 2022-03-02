import React from 'react';
import { useFormik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as Yup from 'yup'
import { fileUploas } from './helpers/FileUploas';

const Formulario = () => {

    const formik = useFormik({
        initialValues:{
            nombre: '',
            email: '',
            pass1: '',
            pass2: '',
            foto: '',

        },
        validationSchema: Yup.object().shape({
            nombre: Yup.string().required("El nombre es obligatorio"),
            email: Yup.string().email("Email no valido").required("El nombre es obligatorio"),
            pass1: Yup.string().required().oneOf([Yup.ref("pass2")], "Contrase;as no coinciden"),
            pass2: Yup.string().required().oneOf([Yup.ref("pass1")], "Contrase;a no coinciden")
            
        }),
        onSubmit: (data)=>{
            console.log(data)
        }

    })

    const SignupSchema= Yup.object().shape({
        nombre: Yup.string().required("El nombre es obligatorio"),
        email: Yup.string().email("Email no valido").required("El nombre es obligatorio"),
        pass1: Yup.string().required().oneOf([Yup.ref("pass2")], "Contrase;as no coinciden"),
        pass2: Yup.string().required().oneOf([Yup.ref("pass1")], "Contrase;a no coinciden")
        
    })
  
    
  
    const handleFileChange =(e)=>{
      console.log(e)
        const file = e.target.files[0]
        console.log(file)

        fileUploas(file)
            .then(resp =>{
                formik.initialValues.foto = resp
                console.log(resp)
            })
            .catch(error =>{
                console.log(error.message)
            })
    }

    return (
        <div>
             <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        name="nombre"
                        onChange={formik.handleChange}
                        error= {formik.errors.nombre && true}

                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="email"
                        name="email"
                        onChange={formik.handleChange}
                        error= {formik.errors.email}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="pass1"
                        onChange={formik.handleChange}
                        error= {formik.errors.pass1}

                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRepitPassword">
                    <Form.Label>Repita contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="pass2"
                        onChange={formik.handleChange}
                        error= {formik.errors.pass2}

                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRepitPassword">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control
                        type="file"
                        placeholder="Agregar foto"
                        name="foto"
                        onChange={handleFileChange}
                      

                    />
                </Form.Group>


                <Button
                    variant="primary" type="submit">
                    Registrarse
                </Button>


                <Link to="/login">Login</Link>

            </Form>
        </div>
    );
};

export default Formulario;