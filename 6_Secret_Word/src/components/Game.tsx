import React, { FormEvent, useRef, useState } from "react";
import "./Game.css";

interface ContainerProps {
  verifyLetter(letter: string): any;
  pickedWord: string;
  pickedCategory: string;
  letters: string[];
  guessedLetter: string[];
  wrongLetter: string[];
  score: number;
}

const Game: React.FC<ContainerProps> = (props) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.verifyLetter(letter);
    setLetter("");

    if (letterInputRef.current) {
      letterInputRef.current.focus();
    }
  };

  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {props.score}</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{props.pickedCategory}</span>
      </h3>
      <p>Você ainda tem {props.guessedLetter} chance(s)</p>
      <div className="wordContainer">
        {props.letters.map((letter, i) =>
          props.letters.includes(letter) ? (
            <span key={i} className="letter">
              {letter}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        )}
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength={1}
            required
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
          />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLetterContainer">
        <p>Letras já ultilizadas</p>
        {props.wrongLetter.map((letter, i) => (
          <span key={i} className="letter">
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Game;
