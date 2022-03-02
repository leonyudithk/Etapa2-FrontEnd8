import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesApi } from "../types/types"


export const listaCardAsyn =()=>{
    return async (dispatch) =>{
          const traerDatos = await getDocs(collection(db, "TraerApi"))
          const card= []
          traerDatos.forEach((doc)=>{
              card.push({
                  ...doc.data()
              })
          })
          dispatch(listApiCardSyn(card))
    } 
  }
  
  export const listApiCardSyn = (card)=>{
      return{
          type: typesApi.list,
          payload: card
      }
  }