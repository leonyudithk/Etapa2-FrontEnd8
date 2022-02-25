import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                     />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    />
            </Form.Group>
            <Button variant="primary" type="submit">
                Enviar
            </Button>

            <Container className="auth__social-networks">
                <Container
                    className="google-btn"
                    

                >
                    <Container className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </Container>
                </Container>
            </Container>
           
            <Link to="/registro">Registrarse</Link>
        </Form>
 
        </div>
    );
};

export default Login;