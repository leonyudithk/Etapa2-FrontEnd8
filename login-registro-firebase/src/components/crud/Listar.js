
import React, { useEffect, useState } from 'react';
import { Button, Image, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAsyn } from '../../redux/actions/actionPlantas';
import Editar from './Editar';

const Listar = () => {

    const dispatch = useDispatch()

    const [modal, setModal] = useState(false)
    const [enviarDatosModal, setEnviarDatosModal] = useState([])

    const { plantas } = useSelector(store => store.plantas)

    console.log(plantas)

    useEffect(() => {

    }, [plantas])


    //---------Editar-------------//
    const editar=(codigo)=>{
                //--------t=conseguir los datos de ese objeto con ese codigo--------------//
        const traerLaPlanta = plantas.find(t=> t.codigo ===codigo)
       
        setModal(true)
        setEnviarDatosModal(traerLaPlanta)
        

    }
    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Acciones</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        plantas.map((p, index) => (
                            <tr key={index}>
                                <td>{p.codigo}</td>
                                <td>{p.nombre}</td>

                                <td>{p.descripcion}</td>
                                <td>{p.precio}</td>

                                <Button>
                                    <Image width={20} src='https://res.cloudinary.com/danimel/image/upload/v1646015685/edit_nh7sll.png' 
                                        onClick={()=>editar(p.codigo)}
                                    />
                                </Button>
                                <Button>
                                    <Image width={20} src='https://res.cloudinary.com/danimel/image/upload/v1646015682/trash_2_vcdean.png'
                                        onClick={() => dispatch(deleteAsyn(p.codigo))} />
                                </Button>
                            </tr>
                        ))

                    }



                </tbody>
            </Table>
            {
                modal === true ? <Editar modal={enviarDatosModal}/> : ''
            }
        </div>
    );
};

export default Listar;