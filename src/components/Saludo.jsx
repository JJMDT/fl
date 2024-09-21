export const Saludo= ({ onOpen })=> {
    return(
        <>


    <div class="greetings">
        <span>Hola</span>
        <span> </span>
        <span>Chuchi</span>
        <span>♥</span>
    </div>

    <div class="description">
        <span>Tengo un regalo para vos 🎁</span>
    </div>

    <div class="button">
        <button onClick={onOpen}> Abrir 🥰
        </button>
    </div>
    
   

        </>
    )
}