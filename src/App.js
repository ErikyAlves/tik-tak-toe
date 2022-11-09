// styles
import "./styles/css/style.css";
// Icons
import iconController from "./img/icons/sports_esports.svg";

export default function App() {
  return (
    <>
      <section id="introduction">
        <h1>TIK-TAK-TOE</h1>
        {/* game */}
      </section>
      {/* introdução */}
      <section className="chosen-players">
        <h2>ESCOLHA COM QUAL QUER JOGAR</h2>
        <button id="player1">O</button>
        <button id="player2">X</button>
        <button id="play">
          PLAY
          <img src={iconController} alt="" />
        </button>
      </section>
      <section id="game-board" className=""></section>
      <footer id="footer">
        <p>@erikyalves | todos os direitos reservados</p>
      </footer>
    </>
  );
}
