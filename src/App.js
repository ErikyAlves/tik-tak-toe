// styles
import "./styles/css/style.css";
import introIconX from "./img/icons-X/introduction/close.svg";
import introIconO from "./img/icons-O/introduction/panorama_fish_eye.svg";

export default function App() {
  return (
    <>
      <section id="introduction">
        <h1>TIK-TAK-TOE</h1>
        {/* introdução */}
        <section className="chosen-players">
          <h2>ESCOLHA COM QUAL QUER JOGAR</h2>
          <button id="player1">
            <img src={introIconX} alt="icon X" />
          </button>
          <button id="player2">
            <img src={introIconO} alt="icon X" />
          </button>
        </section>
        {/* game */}
        <section id="game-board" className="">
          
        </section>
      </section>
    </>
  );
}
