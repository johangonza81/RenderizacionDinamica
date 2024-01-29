import React from "react";
import { Alert } from "react-bootstrap";



const textMensaje = ''
const Alerta  =({variant,textMensaje}) =>{
    
    return(
        <>
        <Alert variant={variant}>{textMensaje}</Alert>
        </>
    )
}
export default Alerta;