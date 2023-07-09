import { useState } from "react";

import "./App.css";
import MyForm from "./compoents/MyForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <MyForm user={{ name: "Audrey", email: "Audrey@gmail.com" }} />
      </div>
    </>
  );
}

export default App;
