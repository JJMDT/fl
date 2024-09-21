import '../css/saludo.css'

export const Saludo= ({ onOpen })=> {
    return (
      <>
      <div className='containerSaludo'>


        <div class="greetings">
          <span>Hola</span>
          <span>chuchi</span>
          <span>♥</span>
        </div>
        <br />
        <br />
        <div class="description">
          <span>Tengo un regalo para vos 😳🎁</span>
        </div>
        <br />
        <br />
        <div class="button">
          <button onClick={onOpen}> Abrir 🥰</button>
        </div>
        </div>
      </>
    );
}