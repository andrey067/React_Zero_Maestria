import "./App.css";
import Events from "./components/events";
import FirtsComponent from "./components/firts-component";
import HelloComponent from "./components/hello-world.component";
import TemplateExpression from "./components/template-expression";

function App() {
  return (
    <>
      <HelloComponent></HelloComponent>
      <FirtsComponent></FirtsComponent>
      <TemplateExpression></TemplateExpression>
      <Events></Events>
    </>
  );
}

export default App;
