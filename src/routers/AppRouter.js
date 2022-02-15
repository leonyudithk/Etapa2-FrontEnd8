import { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import { DetalleTarea } from '../components/DetalleTarea';
import { Navbar } from '../components/Navbar';
import { Container } from '../Container/container';
import { url } from '../helpers/url';


export const AppRouter = () => {

   const [tareas, setTareas]= useState([])

   useEffect(()=>{
        cargarDatos();
   }, [])

    const cargarDatos = async ()=>{
        const resp = await fetch(url)
        const data =await resp.json()
      //  console.log(data)
        setTareas(data)
    }

    
  return   <div>
  <Router>
      <Navbar />
      <Routes>
            <Route path='/' element={<Container data={tareas}/>}/>
            <Route path='/detalle/:id' element={<DetalleTarea detalle2={tareas}/>}/>
      </Routes>
  </Router>
</div>;
};
