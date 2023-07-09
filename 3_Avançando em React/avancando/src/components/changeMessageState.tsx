import React from "react";
interface ContainerProps {
  handleMessage: (msg: string) => void;
}

const ChangeMessageState: React.FC<ContainerProps> = ({ handleMessage }) => {
  const message = ["Oii", "Ola", "Hi"];

  return (
    <div>
      <button onClick={() => handleMessage(message[0])}>1</button>
      <button onClick={() => handleMessage(message[1])}>2</button>
      <button onClick={() => handleMessage(message[2])}>3</button>
    </div>
  );
};

export default ChangeMessageState;
