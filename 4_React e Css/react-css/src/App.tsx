
import "./App.css";
import CssInline from "./component/CssInline";
import CssModule from "./component/CssModule";
import MyComponent from "./component/MyComponent";

function App() {

  return (
    <>
      <h1>React CSS</h1>


      {/* Css componet */}
      <MyComponent />
      {/*Css global  */}
      <p>Este paragrago é do App</p>
      <CssInline/>

      <CssModule/>
    </>
  );
}

export default App;
