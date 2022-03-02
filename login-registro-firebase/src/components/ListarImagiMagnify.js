import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import ReactImageMagnify from 'react-image-magnify';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { listaCardAsyn } from '../redux/actions/actionListarCardApi';

const ListarImagiMagnify = () => {

    const dispatch = useDispatch()
    
    dispatch(listaCardAsyn())

    const { card } = useSelector(store => store.card)
    console.log(card)

    useEffect(() => {

    }, [card])

    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Imagen</th>
                        <th>Nombre</th>
                       
                        <th>Status</th>
                        <th>Especies</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        card.map((p, index) => (
                            <tr key={index}>
                                <td>{p.documento}</td>
                                <td>
                                    <ReactImageMagnify {...{
                                        smallImage: {
                                            alt: 'Wristwatch by Ted Baker London',
                                            isFluidWidth: true,
                                            src:p.image
                                        },
                                        largeImage: {
                                            src: p.image,
                                            width: 1200,
                                            height: 1800
                                        }
                                    }} />
                                </td>
                                <td>{p.name}</td>
                               
                                <td>{p.status}</td>
                                <td>{p.species}</td>



                            </tr>
                        ))

                    }



                </tbody>
            </Table>
        </div>
    );
};

export default ListarImagiMagnify;