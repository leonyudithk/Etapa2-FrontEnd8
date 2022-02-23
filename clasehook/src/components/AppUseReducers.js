import React, { useReducer} from 'react';

const initialState={
    count:0,
    countInterval:1,
    increment: true
}

const reducer=(state, action)=>{
    switch (action.type) {
        case "INCREMENT":
            return{
                ...state,
                increment: action.increment
            }
        case "SET-INTERVAL":
                return{
                    ...state,
                    countInterval:  parseInt(action.countInterval)
                }
        case "COUNT-INCREMENT":
         return{
               ...state,
                   count: state.count + state.countInterval
             }    
        case "COUNT-DECREMENT":
                return{
                      ...state,
                          count: state.count - state.countInterval
                    }
        case "RESET":
                return initialState
        default:
           return state;
    }
}

const AppUseReducers = () => {

    // Declaracion de UseReducers
    const [state, dispacth] = useReducer(reducer, initialState)

    ///declaracion de los handles
    const handleIncremento=(e)=>{
        const {checked} =e.target
        dispacth({type: "INCREMENT", increment:checked})
    }

    const handleCountIntervalo=(e)=>{
        const {value} =e.target
        dispacth({type: "SET-INTERVAL", countInterval:value})
    }

    const handleCount=()=>{
        if(state.increment){
            dispacth({type: "COUNT-INCREMENT" })
        }else
        {
            dispacth({type: "COUNT-DECREMENT" })
        }
    }

    const handleReset=()=>{
             dispacth({type: "RESET"})
    }


    return (
        <div>
            <h1>Hook de UseReducers</h1>
            <p>El Valor es: {state.count} </p>
            <div>
                <input 
                type="checkbox"
                    id="check"
                    checked={state.increment}
                    onChange={handleIncremento}
                />
                <label htmlFor='check'>Incrementar</label>
                <br/>
                <label htmlFor='intervalo'>Intervalo</label>
                <input
                    type="number"
                    id="intervalo"
                    value={state.countInterval}
                    onChange={handleCountIntervalo}
                />
                <button onClick={handleCount}>{state.increment? "Incrementar" : "Decrementar"}</button>
                <button onClick={handleReset}>Reset</button>
                                

                

            </div>

        </div>
    );
};

export default AppUseReducers;