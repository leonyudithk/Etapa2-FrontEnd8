import { types, typesHospital } from "../types/types";


export const AgregarProducto = (producto) => {
    return{
        type: types.agregar,
        payload: producto
    }
};


export const AgregarCitas = (citas) => {
    return{
        type: typesHospital.agregar,
        payload: citas
    }
};

export const BorrarCitas = (id) => {
    return{
        type: typesHospital.borrar,
        payload: id
    }
};


