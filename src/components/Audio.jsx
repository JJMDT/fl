import { useEffect, useState } from 'react';
import audioFloricienta from '../audio/floricienta.mp3';

export const Audio = ({ audioRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const audio = audioRef.current; // Accedemos al audio usando la referencia

    const handlePlay = () => {
      setIsVisible(false); // Oculta el contenedor al reproducir el audio
    };

    const handlePause = () => {
      setIsVisible(true); // Muestra el contenedor si el audio se pausa
    };

    // Intentar reproducir automáticamente
    audio.play().then(() => {
      setIsVisible(false); // Si se reproduce, ocultamos el reproductor
    }).catch((error) => {
      setIsVisible(true); // Si no se puede reproducir automáticamente, mostrar el reproductor
      console.log("Error al intentar reproducir el audio automáticamente: ", error);
    });

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, [audioRef]);

  return (
    <>
      <div className="containerAudio" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
        <audio id="myAudio" ref={audioRef} src={audioFloricienta} controls loop></audio>
      </div>
    </>
  );
};
