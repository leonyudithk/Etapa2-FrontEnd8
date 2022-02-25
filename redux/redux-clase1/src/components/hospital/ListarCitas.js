import React from 'react';
import { useSelector } from 'react-redux';

const ListarCitas = () => {

    const {citas}= useSelector(store=>store.citas)
    console.log(citas)
    return (
        <div>
            <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center">Agenda</h2>
                <div className="lista-citas">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Hora</th>
                                <th scope="col">Fractura</th>
                                <th scope="col">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                          {
                              citas.map((cita, index) =>(
                                <tr key={index}>
                                <td>{cita.name}</td>
                                <td>{cita.fecha}</td>
                                <td>{cita.hora}</td>
                                <td>{cita.sintomas}</td>
 
                                                               <td><button className="btn btn-danger">
                                    Borrar &times;
                                   </button>
                                </td>
                            </tr>
                              ))
                          }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ListarCitas;