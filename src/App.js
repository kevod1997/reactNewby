import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/NavBar';

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

  let rojo = { color: 'red'};
  let verde = { bakcground: 'green'};
  let miestilo;
  if(1==1){
    miestilo = rojo
  }else{
    miestilo = verde
  }
let x = "Sos un maestro";
  return (
    /* className="App"*/
    <div style={{color: 'black'}}>
      <div>
        <NavBar />
      <h1>Hola Miguel! {x} </h1>
      <p>Me comere a suertudo</p>
      </div>
      <div>Footer</div>
    </div>

  );
}
export default App;
