import { addDoc, collection } from 'firebase/firestore';
import React from 'react';
import { db } from '../firebase/firebaseConfig';

const EnviarFirebase = () => {

 const api="https://rickandmortyapi.com/api/charactadada222222"

    const obtenerApi = async (api)=>{
        const resp = await fetch(api)
        const data = await resp.json()
         enviarDatos(data.results)
         
    }

    const enviarDatos = (data) =>{
       data.forEach(card =>{
           const {id, name, image, status, species}= card

//asignar lo que me traigo de la api y lo envio a la collection de firebase

        const pasarApi ={
            name: name,
            image: image,
            status: status,
            species: species,
            documento: id, 
        }
        addDoc(collection(db, "t"),pasarApi)
         .then(resp=>{
             console.log('agregado...')
         })
         .catch(error =>{
             console.log('no se agrego')
         })

       })
    }
  obtenerApi(api)


 console.log (api)
    return (
        <div>
            
        </div>
    );
};

export default EnviarFirebase;