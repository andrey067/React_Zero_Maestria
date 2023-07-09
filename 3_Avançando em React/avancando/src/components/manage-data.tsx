import { useState } from "react";

export const ManageData = () => {
  let someData: number = 10;
  const [number, setNumber] = useState(10);
  return (
    <>
      <div>
        <div>Valor: {someData}</div>
        <button onClick={() => (someData = 15)}>Mudar Variavel</button>
      </div>
      <p></p>
      <div>
        <div>Valor useState: {number}</div>
        <button onClick={() => setNumber(15)}>Mudar Variavel</button>
      </div>
    </>
  );
};
