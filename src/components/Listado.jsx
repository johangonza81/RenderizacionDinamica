
import { Table } from "react-bootstrap";
import {FaTrashAlt } from 'react-icons/fa';

const Listado = ({setColaboradores, datoFiltrado, setDatoFiltrado}) =>{
    const handleDelete = (id) => {
        const actualizaColaboradores = datoFiltrado.filter((colaborador) => colaborador.id !== id);
        setColaboradores(actualizaColaboradores)
        setDatoFiltrado(actualizaColaboradores)
        alert('Esta Borrando este Colaborador');
      };
       
    return(
    <Table>
      <thead className="encabe4">
        <tr className="encabe4" >
            <th className="encabe2">Nombre</th>
            <th className="encabe2">Correo</th>
            <th className="encabe2">Edad</th>
            <th className="encabe2">Cargo</th>
            <th className="encabe2">Telefono</th>
            <th className="encabe2">Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {datoFiltrado.map((colaborador) => (
         <tr key={colaborador.id}>
            <td  className="encabe1">{colaborador.nombre}</td>
            <td  className="encabe1">{colaborador.correo}</td>
            <td  className="encabe1">{colaborador.edad}</td>
            <td  className="encabe1">{colaborador.cargo}</td>
            <td  className="encabe1">{colaborador.telefono}</td>
            <td  className="encabe1"><button  onClick={ () =>handleDelete(colaborador.id)}><FaTrashAlt color="red"/></button></td>
        </tr>   
            ))}
      </tbody>
    </Table>
    

 )   
}
export default Listado;