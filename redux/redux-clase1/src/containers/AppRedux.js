import React from 'react';
import ListarProducto from '../components/ListarProducto';
import Producto from '../components/Producto';
import AgregarCita from '../components/hospital/AgregarCita'
import ListarCitas from '../components/hospital/ListarCitas'

const AppRedux = () => {
    return (
        <div>
           <div className="container text-center">
        <div className="row mt-3">
          <div className="col-md-6">
            <Producto />
          </div>
          <div className="col-md-6">
            <ListarProducto />
          </div>
        </div>
      </div>
      <div className="row mt-3">
          <div className="col-md-6">
            <AgregarCita/>
          </div>
          <div className="col-md-6">
            <ListarCitas/>
          </div>
        </div>
        </div>
    );
};

export default AppRedux;