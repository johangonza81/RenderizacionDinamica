import {FaSearch} from 'react-icons/fa';

const Buscador = ({colaboradores,datoFiltrado}) =>{
    const handlerBusca = (e) =>{
        const buscaPalabra = e.target.value.toLowerCase();
    
       
    const resultado = colaboradores.filter((colaborador) =>
    colaborador.nombre.toLowerCase().includes(buscaPalabra)||
    colaborador.correo.toLowerCase().includes(buscaPalabra)||
    colaborador.edad.includes(buscaPalabra)||
    colaborador.cargo.toLowerCase().includes(buscaPalabra)||
    colaborador.telefono.includes(buscaPalabra)
    )
    datoFiltrado(resultado)
}
    return(
        <>
        <div className="buscaContainer2">
        <label><input 
        onChange={handlerBusca}></input><FaSearch/>BUSCAR</label></div>
        
        </>
    )
}
export default Buscador;
