import { useState } from "react";
import "./App.css";
import Inicio from "./components/inicio";
import Contador from "./components/contador";
import {Header} from "./components/header";

function App() {
  const [pagina, setPagina] = useState("Inicio");
  

  return (
    <>
      
      <Header pagina={pagina} setPagina={setPagina}/>
      <main>
        {pagina === "Inicio" && <Inicio />}
        {pagina === "Contador" && <Contador />}
      </main>
    </>
  );
}

export default App;

