import { useState, useEffect } from 'react';


export const Flores = () => {
    const [mensaje, setMensaje] = useState("...");

    // Array de frases que cambiarán
    const frases = [
        '¡Hola mi amoooorrr! 😍',
        '¡Este es un regalo especial para vos 😉',
        'Sos lo mejor que me pasó! 😳',
        `Te regalo estas flores 🌻🌻🌻`,
        'para que no tengas que echarle agua 💧',
        'todos los dias 😂😂😂',
        'Feliz primavera!  ☀💐🥰',
        ' i love you  💛💚💙💜 '
    ];

    useEffect(() => {
        // Cambia la frase cada 3 segundos (3000 milisegundos)
        const intervalo = setInterval(() => {
            setMensaje(prevMensaje => {
                // Obtener el índice de la frase actual
                const indexActual = frases.indexOf(prevMensaje);
                // Calcular el siguiente índice
                const siguienteIndex = (indexActual + 1) % frases.length;
                return frases[siguienteIndex];
            });
        }, 3000);

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalo);
    }, [frases]);

    return (
        <>
        <div className='containerMensaje'>
            <p className='large'>{mensaje}</p>
        </div>
            <iframe className='frame' src="/FLORES.html"width="100%" height="100%" >
            </iframe>
        </>
    );
};
