import React from 'react';
import { useDispatch } from 'react-redux';
import { AgregarCitas } from '../../redux/actions/actionsProducto';
import useForm from '../hooks/useForm';

const AgregarCita = () => {
    const dispatch = useDispatch()

    const [formValue, handleInputChange, rest]=useForm({
        name: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const {name, fecha, hora, sintomas} = formValue

    const nuevaCita=(citas)=>{
        dispatch(AgregarCitas(citas))
 
    }
    const handleSubmit=(e)=>{
         e.preventDefault()
 
         rest()
 
         nuevaCita({name, fecha, hora, sintomas})
    }
 

    return (
        <div>
               <div className="card mt-5">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <h1> Agregar Citas</h1>
                    <hr />

                    <div className="orm-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre</label>
                        <div className="mb-4 mb-lg-0">
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Tu nombre"
                                autoComplete="off"
                                value={name}
                                onChange={handleInputChange}

                            />
                        </div>
                    </div>

                    <div className="form-group row mt-3">
                        <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                        <div className="form-group col-sm-8 col-lg-4">
                            <input
                                type="date"
                                name="fecha"
                                className="form-control"
                                autoComplete="off"
                                value={fecha}
                                onChange={handleInputChange}

                            />
                        </div>

                        <label className="col-sm-4 col-lg-2 col-form-label">hora</label>
                        <div className="form-group col-sm-8 col-lg-4">
                            <input
                                type="time"
                                name="hora"
                                className="form-control"
                                autoComplete="off"
                                value={hora}
                                onChange={handleInputChange}

                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                        <div className="form-group">
                            <textarea
                                name="sintomas"
                                className="form-control"
                                autoComplete="off"
                                value={sintomas}
                                onChange={handleInputChange}>

                            </textarea>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Guardar
                    </button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default AgregarCita;