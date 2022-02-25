import { typesHospital } from "../types/types";


const initialState = {
    citas: []
}

export const citasReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesHospital.agregar:
            return {
                citas: [...state.citas, action.payload]
            }
        case typesHospital.borrar:
            return {
                ...state
            }
        default:
          return state
        }
}