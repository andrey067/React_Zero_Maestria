import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import About from "./pages/About";
import Nav from "./components/Nav";
import Product from "./pages/Product";
import ProdutoInfo from "./pages/ProdutoInfo";

function App() {
  return (
    <>
      <div>
        <h1>React Router</h1>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Rota dinamica */}
            <Route path="/product/:id/info" element={<ProdutoInfo />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
