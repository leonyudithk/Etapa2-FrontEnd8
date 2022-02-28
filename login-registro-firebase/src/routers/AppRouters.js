import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Agregar from '../components/crud/Agregar';
import Listar from '../components/crud/Listar';
import Login from '../components/Login';
import Registro from '../components/Registro';
import NavBar from '../components/crud/NavBar';


export default function AppRouter() {

    
    return (
        <BrowserRouter>
        <NavBar/>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/" element={<Agregar />} />
                <Route path="/listar" element={<Listar />} />
            </Routes>
        </BrowserRouter>
    );
};

