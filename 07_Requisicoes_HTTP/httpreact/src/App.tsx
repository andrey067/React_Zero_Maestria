import { useEffect, useState } from 'react'
import { Product } from './models/Product';
import './App.css'
import { useFetch } from './hooks/useFetch';

function App() {
  const url = "http://localhost:3000/products";
  const [products, setProducts] = useState(Array<Product>());
  const [name, setName] = useState("");
  const [price, setPrice] = useState(Number);



  //1 - regatando dados
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(url);
  //       const data = await res.json() as Product[];
  //       setProducts(data);
  //     } catch (error) {
  //       // Trate o erro conforme necessário
  //       console.error("Erro ao buscar os produtos:", error);
  //     }
  //   };

  //   fetchData().catch((error) => {
  //     // Trate o erro caso a promessa seja rejeitada
  //     console.error("Erro ao buscar os produtos:", error);
  //   });
  // }, []);

  //1.1 - usando custom hook
  const { data: items, httpConfig, loading } = useFetch<Product>(url);



  //2 - adicao de produtos
  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const newProduct: Product = { id: 0, name, price };
  //   const res = await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(newProduct)
  //   });

  //   //3 - carregamento dinamico
  //   const addedProduct = await res.json() as Product;
  //   setProducts((prevProducts) => [...prevProducts, addedProduct])

  //   console.log("enviando produto", name, price)
  //   console.log(" produto", products)
  // }

  // 5 - refatorando o metodo Post

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProduct: Product = { id: 0, name, price };
    httpConfig(newProduct, "POST");

    console.log("enviando produto", name, price)
    console.log(" produto", products)
  }

  console.log(" produto", products)
  return (
    <>
      <div className='App'>
        <h1>Lita de Produtos</h1>
        {/* 6 - loading */}
        {loading && <p>Carregando dados...</p>}
        {!loading &&
          <ul>
            {items && items.map((p) => (
              <li key={p.id}> {p.name} - R${p.price}</li>
            ))}
          </ul>}
      </div>
      <div className='add-produt'>
        <form onSubmit={handleSubmit}>
          <label >
            Nome:
            <input type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)} />
          </label>
          <label >
            Nome:
            <input type="text"
              name="price"
              value={price}
              onChange={(e) => setPrice(Number.parseFloat(e.target.value))} />
          </label>
          {loading && <button type="submit" disabled >Aguarde</button>}
          {!loading && <button type="submit"  >Enviar</button>}

        </form>
      </div>


    </>
  )
}

export default App
