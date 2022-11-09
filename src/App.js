// styles
import "./styles/css/style.css";
import introIconX1 from "./img/icons-X/introduction/close.svg";
import introIconO1 from "./img/icons-O/introduction/panorama_fish_eye.svg";
import iconController from "./img/icons/sports_esports.svg";
export default function App() {
  return (
    <>
      <section id="introduction">
        <h1>TIK-TAK-TOE</h1>
        {/* introdução */}
        <section className="chosen-players">
          <h2>ESCOLHA COM QUAL QUER JOGAR</h2>
          <button id="player1">
            <img src={introIconX1} alt="icon X" />
          </button>
          <button id="player2">
            <img src={introIconO1} alt="icon X" />
          </button>
          <button id="play">
            PLAY
            <img src={iconController} alt="" />
          </button>
        </section>
        {/* game */}
        <section id="game-board" className=""></section>
      </section>
    </>
  );
}
