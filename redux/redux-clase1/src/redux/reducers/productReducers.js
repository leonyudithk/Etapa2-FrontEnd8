import { types } from "../types/types";

const initialState={
    producto: []
}
export const productReducers =(state=initialState, action)=>{
    switch (action.type) {
        case types.agregar:
            return{
               producto: [...state.producto, action.payload]
            }
            
              
        default:
           return state
    }

}