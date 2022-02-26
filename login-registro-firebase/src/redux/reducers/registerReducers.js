import { types } from "../types/types";

export const registerReducers = (state={}, action)=>{
    switch (action.type) {
        case types.register:
            
           return {
              email: action.payload.email,
              password: action.payload.pass1,
              nombre:  action.payload.nombre
           }
    
        default:
          return state
    }
}