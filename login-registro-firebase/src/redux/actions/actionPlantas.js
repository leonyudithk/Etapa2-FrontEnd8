import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesPlantas } from "../types/types"

//-----------Editar-------------//
export const editAsyn =(codigo, planta)=>{
    return async (dispatch)=>{
        const traerCollection = collection(db, "plantasBD")
        const q = query(traerCollection, where("codigo", "==", codigo))
        const datosQ = await getDocs(q)
        let id
        datosQ.forEach( async (docu) =>{
            id= docu.id 
        })
        console.log(id)
       
        const docRef = doc(db, "plantasBD", id)
        await updateDoc(docRef, planta)
        .then(()=>listAsynPlantas())


    }
}

export const editSyn = (codigo, planta)=>{
    return{
        type:typesPlantas.edit,
        payload: planta
    }
}


//-----------Eliminar por codigo ------------------//

export const deleteAsyn =(codigo)=>{
    return async (dispatch)=>{
        const traerCollection = collection(db, "plantasBD")
        const q = query(traerCollection, where("codigo", "==", codigo))
        const datosQ = await getDocs(q)
        datosQ.forEach((docu =>{
            deleteDoc(doc(db, "plantasBD", docu.id))
        }))
        dispatch(deleteSyn(codigo))
    }
}

export const deleteSyn =(codigo)=>{
    return{
        type: typesPlantas.delete,
        payload: codigo
    }
}


//---------------Listar-------------------//
export const listAsynPlantas =()=>{
  return async (dispatch) =>{
        const traerDatos = await getDocs(collection(db, "plantasBD"))
        const plantas= []
        traerDatos.forEach((doc)=>{
            plantas.push({
                ...doc.data()
            })
        })
        dispatch(listPlantaSyn(plantas))
  } 
}

export const listPlantaSyn = (planta)=>{
    return{
        type: typesPlantas.list,
        payload: planta
    }
}

//-------------Agregar nueva Planta----------------//
//----------Asincronica Firebase---//
export const addAsyn =(newPlanta)=>{
   return (dispatch)=>{
       addDoc(collection(db, "plantasBD"), newPlanta)
       .then(resp=>{
           dispatch(addSyn(newPlanta))
           dispatch(listAsynPlantas()) // para que actuaice la  lista cuando yo agrego una planta nueva
       })
       .catch(error=>{
           console.log(error)
       })

   }
}


//------Sincronica----------------///
export const addSyn = (plantas)=>{
    return{
        type: typesPlantas.add,
        payload: plantas
    }
}