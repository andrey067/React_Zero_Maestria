import "./App.css";
import Paisagem from "./assets/img1.jpg";
import { ManageData } from "./components/manage-data";
import Container from "./components/container";
import FunctionContainerProps from "./components/func-container-props";
import { useState } from "react";
import StateLiftComponet from "./components/state-lift-component";
import ChangeMessageState from "./components/changeMessageState";

function App() {
  function ExecuteAlert(): void {
    alert("Função Executada");
  }
  const [message, setMessage] = useState<string>("");

  const handleMessage = (msg: string) => {
    setMessage(msg);
  };

  return (
    <>
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src={Paisagem} alt="Paisagem" />
      </div>
      <ManageData></ManageData>
      <Container myValue="Tests">
        <p>Este é o conteudo</p>
      </Container>
      <FunctionContainerProps onExecute={ExecuteAlert} />
      <StateLiftComponet msg={message}></StateLiftComponet>
      <ChangeMessageState handleMessage={handleMessage}></ChangeMessageState>
      <></>
    </>
  );
}

export default App;
