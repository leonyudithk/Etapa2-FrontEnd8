import React from 'react';
import { Link } from 'react-router-dom';
import { url } from '../helpers/url';

export const ListarTarea = ({tareas}) => {
    console.log('estoy dentro de listar TAREAS')
    console.log(tareas)

    const eliminarTareas = async(id)=>{
        console.log("traigo el id:"+id)
        console.log("traigo el id:"+url+id)
        await fetch(url+id, {
            method:'DELETE'
        })

    }

    return (
        <div>
            <h3 className="text-center">Lista de Tareas</h3>
            <ul className="list-group">
                {
                    tareas.map((tareas)=>(
                        <li className="list-group-item" key={tareas.id} >
                    <span className="lead">{tareas.nombre}</span>
                    <button
                        className="btn btn-danger btm-sm float-end "
                        onClick={()=>eliminarTareas(tareas.id)}
                    >
                        borrar
                    </button>
                    <Link className="btn btn-success btm-sm float-end mx-2"
                        to={`/detalle/${tareas.id}`}>
                    Detalle
                    </Link>
                   
                </li>
                    ))
                }
                
            </ul>
        </div>
    )
}
