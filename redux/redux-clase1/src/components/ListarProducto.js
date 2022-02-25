import React from 'react';
import { useSelector } from 'react-redux';

const ListarProducto = () => {

    // {producto} viene del reducers
    // store.productos viene de store
    const {producto} =useSelector(store=>store.productos)
    console.log(producto)

    return (
        <div className="card mt-5">
        <div className="card-body">
            <h2 className="card-title text-center">Productos Almacenados</h2>
            <div className="lista-producto">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nombre Producto</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                          producto.map((producto, index)=>(
                            <tr key={index}>
                              <td>{producto.nombre.nombre}</td>
                          </tr>
                          ))
                         
                      }
                         
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    );
};

export default ListarProducto;