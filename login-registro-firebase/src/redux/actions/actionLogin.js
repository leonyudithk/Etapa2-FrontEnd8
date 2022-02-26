import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { google } from "../../firebase/firebaseConfig";
import { types } from "../types/types";

export const loginEmailPassword =(email, password)=>{
    return (dispatch)=>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(({user})=>{
            dispatch( actionLogin(user.uid, user.displayName) 
            )
            console.log('Bienvenidossssssss')
        })
        .catch(e=>{
       //     console.log(e)
            console.log('El usuario no fue Encontrado o no existe')
        })
    }
}


export const loginGoogle =()=>{
      return (dispatch)=>{
    const auth = getAuth();
    signInWithPopup(auth, google)
        .then(({user})=>{
            dispatch(actionLogin(user.uid, user.displayName))
            console.log(user)
            console.log('Bienvenida')
        })
        .catch(e=>{
            console.log(e)
        })


    }
}

export const actionLogin =(id, displayname)=>{
    return{
            type: types.login,
            payload: {
                id,
                displayname
            }

    }

}