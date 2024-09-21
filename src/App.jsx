import { useState, useRef } from 'react';
import './css/saludo.css';
import { Flores } from './components/Flores';
import { Saludo } from './components/Saludo';
import { Audio } from './components/Audio';
import {Home} from './components/Home'

function App() {
  const [showSaludo, setShowSaludo] = useState(true);
  const audioRef = useRef(null); // Usamos useRef para acceder al audio

  const handleOpen = () => {
    setShowSaludo(false);

    // Intentar reproducir el audio manualmente al abrir el regalo
    const audio = audioRef.current;
    if (audio) {
      audio.play().catch((error) => {
        console.log("Error al intentar reproducir el audio: ", error);
      });
    }
  };

  return (
    <>
      {showSaludo ? <Saludo onOpen={handleOpen} /> : <Flores />}
      <br />
      <Home/>
      <Audio audioRef={audioRef} /> {/* Pasamos la referencia del audio como prop */}
    </>
  );
}

export default App;
