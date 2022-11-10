// styles
import "./styles/css/style.css";
// Icons
import iconController from "./img/icons/sports_esports.svg";
import iconsX from "./img/icons-X/introduction/close.svg";
export default function App() {
  return (
    <>
      <section id="introduction">
        <h1>
          TIK-TAK-<strong className="rotate">TOE</strong>
        </h1>
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
      <ul id="game-board">
        <li className="game-aria" data-column="1" data-row="1">X</li>
        <li className="game-aria" data-column="1" data-row="2"></li>
        <li className="game-aria" data-column="1" data-row="3"></li>
        <li className="game-aria" data-column="2" data-row="1"></li>
        <li className="game-aria" data-column="2" data-row="2"></li>
        <li className="game-aria" data-column="2" data-row="3"></li>
        <li className="game-aria" data-column="3" data-row="1"></li>
        <li className="game-aria" data-column="3" data-row="2"></li>
        <li className="game-aria" data-column="3" data-row="3"></li>
      </ul>
      <footer id="footer">
        <p>@erikyalves | todos os direitos reservados</p>
      </footer>
    </>
  );
}
