
import { useState } from 'react'
import Listado from './components/Listado'
import Formulario from './components/Formulario'
import { BaseColaboradores } from './assets/BaseColaboradores'
import Buscador from './components/Buscador';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  const estadoInicial = {
    nombre:"",
    correo:"",
    edad:"",
    cargo:"",
    telefono:""
}

  const [colaboradores,setColaboradores] = useState(BaseColaboradores);
  const [datoFiltrado, setDatoFiltrado] = useState(colaboradores)
  const [input, setInput]= useState(estadoInicial);
  const [alerta,setAlerta]= useState({tipo:null, mensaje:""})

  


  return (
    <div className='container'>
      <div className='container2'>
        <h2>Lista de Colaboradores</h2>
        <div className='buscaContainer'><Buscador colaboradores={colaboradores} datoFiltrado={setDatoFiltrado} /></div>
        <Listado 
        colaboradores={colaboradores}
        setColaboradores={setColaboradores} 
        datoFiltrado={datoFiltrado}
        setDatoFiltrado={setDatoFiltrado}/>
      </div>
      <div className='container3'>
      <h5>Agregar Colaborador</h5>
        <Formulario 
        input={input} 
        setInput={setInput} 
        alerta={alerta} 
        setAlerta={setAlerta} 
        datoFiltrado={datoFiltrado}   
        setDatoFiltrado={setDatoFiltrado}/>
      </div>
    </div>
  )
}


export default App
