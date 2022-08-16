
import keduro from '../src/keduro.JPG'
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <img className='kevo' src={keduro}></img>
      <h1>Hola Miguel!</h1>
      <p>Me comere a suertudo</p>
    </div>
    </ChakraProvider>
  );
}

export default App;
