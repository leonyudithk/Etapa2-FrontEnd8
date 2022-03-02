import { typesApi } from "../types/types";

const initialState ={
    card:[]
}

export const listaApiReducers = (state = initialState, action) => {
    switch (action.type) {
       
        case typesApi.list:
            return {
               card: [...action.payload]

            }

      

        default:
            return state;
    }
}