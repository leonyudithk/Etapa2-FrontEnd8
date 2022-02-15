import React from 'react';
import { AgregarTarea } from '../components/AgregarTarea';
import { ListarTarea } from '../components/ListarTarea';

export const Container = ({data}) => {
    console.log('estoy dentro de container')
    console.log(data)

    return (
        <div className="container mt-5">
            <h1>Tareas</h1>
            <hr />
            <div className="row">

                <div className="col-8">
                    <ListarTarea tareas={data}/>
                </div>

                <div className="col-4">
                    <AgregarTarea />
                </div>

            </div>
        </div>
    )
}
