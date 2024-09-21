import { useState } from 'react'
import './App.css'
import { Flores } from './components/flores'
import { Saludo } from './components/Saludo'
import { Audio } from './components/Audio'

function App() {
  const [showSaludo, setShowSaludo] = useState(true);
  const handleOpen = () => {
    setShowSaludo(false);
  }

  return (
    <>
      {showSaludo ? <Saludo onOpen={handleOpen} /> : <Flores />}
      <br />
      <br />
      <Audio  />
    </>
  );
}

export default App
