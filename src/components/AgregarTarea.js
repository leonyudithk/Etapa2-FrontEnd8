import React, { useState } from 'react'
import { url as url2 } from '../helpers/url';
export const AgregarTarea = () => {

    const [agregar, setAgregar]=useState({
        url:'',
        nombre:'',
        descripcion:''
    })    

    //desestructurar lo que quiero agregar
    const {url, nombre, descripcion}=agregar;

    const handleChanged = ({target})=>{
        setAgregar({
            ...agregar,
            [target.name]:[target.value] 
        })
        console.log(agregar)

    }

    const AgregarTarea =()=>{
      
        fetch(url2, {
            method: 'POST',
            body: JSON.stringify(agregar),
            headers:
            {
                'Content-Type':'application/json; charset=utf-8'
            }

        } )
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    return (
        <div>
            <h3 className="text-center"> Agregar Tareas </h3>

            <form className="form-group" onSubmit={handleSubmit} >
                <input
                    type="text"
                    className="form-control "
                    placeholder="Url"
                    name="url"
                    value={url}
                    onChange={handleChanged}
                />

                <input
                    type="text"
                    className="form-control mt-2"
                    name="nombre"
                    autoComplete="off"
                    placeholder="Nombre Tarea"
                    value={nombre}
                    onChange={handleChanged}
                />

                <textarea
                    name="Description"
                    className="form-control mt-2"
                    autoComplete="off"
                    name="descripcion"
                    value={descripcion}
                    onChange={handleChanged}
                >
                </textarea>

                <div className="d-grid gap-2 mx-auto mt-2">
                    <button
                        type="submit"
                        className="btn btn-dark"
                        onClick={()=> AgregarTarea()}>
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    )
}
