import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk";
import { listaApiReducers } from "../reducers/listaApiReducers";
import { loginReducers } from "../reducers/loginReducers"
import { plantasReducers } from "../reducers/plantasReducers";
import { registerReducers } from "../reducers/registerReducers"

const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducers,
    register: registerReducers,
    plantas: plantasReducers,
    card: listaApiReducers
})

export const store =createStore(
    reducers, 
    composeEnhancers(
        applyMiddleware(thunk)
    )  
)