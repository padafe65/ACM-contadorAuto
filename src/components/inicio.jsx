import { useEffect } from "react";

export default function Inicio() {
  useEffect(() => {
    console.log("Página de inicio creada");
    return () => console.log("Página de inicio borrada");
  }, []);

  return (
    <div className="inicio-page">
      <img src="/img/inicio_proyecto.gif" alt="Imagen de inicio" />
      <h2>Página de inicio 🚀</h2>
    </div>
  );
}

