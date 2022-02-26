import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { loginEmailPassword, loginGoogle } from '../redux/actions/actionLogin';


const Login = () => {

    const dispatch = useDispatch()
    const [values, handleInputChange, reset] = useForm({
        email: '',
        password: ''

    })

    const { email, password } = values

    // llamar la accion de buscar ese email y password en firebase
    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(loginEmailPassword(email, password))
        reset()
    }

    // LLamas la accion Asincronica de Google
    const handleGoogle = () => {
        dispatch(loginGoogle())
    }

    return (
        <div>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Enviar
                </Button>

                <Container className="auth__social-networks">
                    <Container
                        className="google-btn"
                        onClick={handleGoogle}

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