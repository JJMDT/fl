import { useEffect } from 'react';
import audioFlor from '../audio/flor.mp3'
import audioFloricienta from '../audio/floricienta.mp3'

export const Audio = ()=>{ 
   
    // Reproduce el audio desde el tiempo guardado
    useEffect(() => {
        const audio = document.getElementById("myAudio");
        audio.play().catch((error) => {
            console.log("Error al intentar reproducir el audio: ", error);
        });
    }, []);

    return (
        <>
        <div className="containerAudio">

         <audio  id="myAudio" src={audioFloricienta} controls autoPlay loop></audio>
        </div>
         </>
    )
}