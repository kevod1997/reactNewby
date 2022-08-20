import { propNames } from "@chakra-ui/react";
import React, {Component} from "react";


//COMPONENTE BASADO EN UNA FUNCION

const Componente = props => <h2 className="componente"> {props.msg} </h2>

// function Componente(props){
//     return <p> {props.msg} </p>
// }

//COMPONENTES BASADOS EN CLASES - TEMA DE THIS MUY COMPLICADO

// class Componente extends Component {
//     render(){
//         return <p>{this.props.msg}</p>
//     }
// }

export default Componente;