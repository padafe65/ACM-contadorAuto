import { useEffect, useState } from "react";
import { Btn } from "./btn";

export default function Contador() {
  const [count, setCount] = useState(0);
  const [activo, setActivo] = useState(true);

  useEffect(() => {
    if (!activo) return;
    const interval = setInterval(() => setCount(prev => prev + 1), 1000);
    return () => clearInterval(interval);
  }, [activo]);

  const toggleContador = () => setActivo(prev => !prev);
  const adelantarContador = () => setCount(prev => Math.max(0, prev + 10));
  const retrocederContador = () => setCount(prev => Math.max(0, prev - 10));
  const limpiarContador = (() => {
    setCount(0);
    toggleContador();
  });

  return (
  <div className="contador-page">
    <div className="container-contador">
      {/* Imagen centrada arriba */}
      <img src="/img/contador.gif" alt="Contador" className="contador-img" />
        <Btn
          className={`btn-contador ${activo ? "pausar" : "reanudar"}`}
          onClick={limpiarContador}
        >
          🧼 Limpiar contador
        </Btn>

      <h5>Contador: {count}</h5>
      
      {/* Botones centrados abajo en una fila */}
      <div className="fila-botones">
        <Btn
          className={`btn-contador ${activo ? "pausar" : "reanudar"}`}
          onClick={retrocederContador}
        >
          ⏱️🔙 Retroceder 10 s
        </Btn>

        <Btn
          className={`btn-contador ${activo ? "pausar" : "reanudar"}`}
          onClick={toggleContador}
        >
          
          {activo ? "⏸️ Pausar" : "▶️ Reanudar"}
        </Btn>

        <Btn
          className={`btn-contador ${activo ? "pausar" : "reanudar"}`}
          onClick={adelantarContador}
        >
          ⏱️⏩ Adelantar 10 s
        </Btn>
      </div>
    </div>
  </div>
);

}


