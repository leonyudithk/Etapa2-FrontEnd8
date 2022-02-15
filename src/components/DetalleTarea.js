import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const DetalleTarea = ({detalle2}) => {

    const navegarRaiz = useNavigate()
    
    console.log("detalles.....", detalle2)

    const params = useParams()
        const {id}=params
       console.log(id)

    const buscar = detalle2.find(data=>data.id === Number(id))  
    console.log(buscar)  

    return <div>
        <div className="container row row-cols-1 row-cols-md-5 g-4 py-5 text-center">


            <div className="card text-white bg-dark ms-3 py-3"  >
                <div className="">
                    <img src={buscar.url} className="img-fluid rounded-start" alt="..." width="200px" />
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card-body">
                            <h5 className="card-title">{buscar.nombre}</h5>
                            <p className="card-title">{buscar.descripcion}</p>

                        </div>
                    </div>
                </div>

                <button
                    className="btn btn-warning btm-sm float-end mx-2"
                    onClick={()=> navegarRaiz('/')}
                >
                    Atras
                </button>
            </div>

        </div>
    </div>;
};
