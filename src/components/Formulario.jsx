import { Form, Button } from "react-bootstrap"
import Alerta from "./Alerta";


const Formulario =({input,setInput,alerta,setAlerta,setDatoFiltrado,datoFiltrado}) =>{


    const validarDatos= (e) =>{
        const estadoInicial = {
            nombre:"",
            correo:"",
            edad:"",
            cargo:"",
            telefono:""
        }
        
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (input.nombre === '' || input.correo === '' || input.edad === '' || input.cargo === '' || input.telefono === ''){
           setAlerta({tipo:"danger", mensaje:"todo los campos son obligatorios"})
            return;
        }
        else if(!emailRegex.test(input.correo)) {
            setAlerta({tipo:'danger', mensaje:'Ingrese un correo electrónico válido'})
            return; 
       
        } else {
            setAlerta({tipo:'primary', mensaje:'Formulario Enviado'}) 

         
       setDatoFiltrado([...datoFiltrado, input])
       setInput(estadoInicial);
        }
        
    }


    const handleChange = (e) =>{
        setInput({...input, [e.target.name]:e.target.value})
    }

    return(
        <>
        <Form  onSubmit={validarDatos}>
            <Form.Group>
                <Form.Label className="labelContainer">Nombre</Form.Label>
                <Form.Control 
                type="text"
                name="nombre" 
                placeholder="Ingrese su Nombre"
                className="form-control"
                onChange={handleChange}
                value={input.nombre}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label className="labelContainer">Email</Form.Label>
                <Form.Control 
                type="text"
                name="correo" 
                placeholder="Ingrese su Correo"
                className="form-control"
                onChange={handleChange}
                value={input.correo}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label className="labelContainer">Edad</Form.Label>
                <Form.Control 
                type="number"
                name="edad" 
                placeholder="Ingrese su Edad"
                className="form-control"
                onChange={handleChange}
                value={input.edad}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label className="labelContainer">Cargo</Form.Label>
                <Form.Control 
                type="text"
                name="cargo" 
                placeholder="Ingrese el Cargo"
                className="form-control"
                onChange={handleChange}
                value={input.cargo}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label className="labelContainer">Telefono</Form.Label>
                <Form.Control 
                type="number"
                name="telefono" 
                placeholder="Ingrese el Telefono"
                className="form-control"
                onChange={handleChange}
                value={input.telefono}
                />
            </Form.Group>
            <Button className="botonContainer" variant="primary" type="submit">
            Agregar Colaborador
            </Button>
            {alerta.tipo && <Alerta variant={alerta.tipo} textMensaje={alerta.mensaje}/>}    
        </Form>
        </>
    )
}
export default Formulario;