import { combineReducers, createStore } from "redux";
import { citasReducers } from "../reducers/citasReducers";
import { productReducers } from "../reducers/productReducers";

const reducers = combineReducers({
    productos: productReducers,
    citas: citasReducers

})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

