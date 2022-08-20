import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Footer from "./components/Footer";
import Producto from "./components/Producto";

function App() {
  // let i = 1;
  // i = i + 1;
  // i++;
  // if(i == 0){
  //   console.log('i es 0');
  // }else{
  //   console.log('i no es 0');
  // }

  //OPERADOR TERNARIO
  // i == 0 ? console.log('i es 0') : console.log('i no es 0');

  // console.log(i);

  // desestructuracion
  // const persona = {id: 1, nombre: 'juan', edad: 30};

  // const {nombre, id} = persona;
  // console.log(nombre);
  // console.log(id);

  // let rojo = { color: 'red'};
  // let verde = { bakcground: 'green'};
  // let miestilo;
  // if(1==1){
  //   miestilo = rojo
  // }else{
  //   miestilo = verde
  // }
  let x = "Sos un maestro";

  let producto1 = { id: 1, name: "Perfume", price: 50 };
  let producto2 = { id: 2, name: "Aceite", price: 60 };
  let producto3 = { id: 3, name: "Spray", price: 35 };

  function alertHolaMundo() {
    alert("Hola soy un boton de alert");
  }

  return (
    /* className="App"*/
    <div style={{ color: "black" }}>
      <div>
        <NavBar />
        <h1>Hola Miguel! {x} </h1>
        <p>Me comere a suertudo</p>
      </div>
      <div>
        <Componente msg="Hola soy un componente funcional expresado desde una prop" />
        <hr />
        <Producto
          item={producto1}
          color={"blue"}
          alertHolaMundo={alertHolaMundo}
        />
        <Producto
          item={producto2}
          color={"coral"}
          alertHolaMundo={alertHolaMundo}
        />
        <Producto
          item={producto3}
          color={"grey"}
          alertHolaMundo={alertHolaMundo}
        />

        <Propiedades
          cadena="Esto es una cadena de texto"
          numero={14}
          booleano={false}
          arreglo={[1, 2, 3]}
          objeto={{ nombre: "kd", calle: "te falta calle" }}
          funcion={(num) => num * num}
          elementoReact={<i>Esto es un elemento React</i>}
          componenteReact={
            <Componente msg="soy un componente pasado como prop" />
          }
        />
      </div>
      <Footer />
    </div>
  );
}
export default App;
