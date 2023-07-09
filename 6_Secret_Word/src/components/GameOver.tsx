import React from "react";
import "./StartScree.css";

interface ContainerProps {
  retry: (event: React.MouseEvent<HTMLButtonElement>) => void;
  score: number;

}

const GameOver: React.FC<ContainerProps> = (props) => {
  return (
    <div className="end">
      <h1>Game Over</h1>
      <h2>A sua pontucao foi
        <span>{props.score}</span>
      </h2>
      <button onClick={props.retry}>Resetar Jogo</button>
    </div>
  );
};

export default GameOver;
