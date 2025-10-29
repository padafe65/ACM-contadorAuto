import {Btn} from "./btn";

export function Header({pagina, setPagina}){

    

    return(
        <>
            
            <div className="container">
                <div className="menu">
                <Btn  onClick={() => setPagina("Inicio")} active={pagina === 'Inicio'}>
                    🚀 Inicio
                </Btn>
                <Btn onClick={() => setPagina("Contador")} active={pagina === 'Contador'}>
                   ⏱️ Contador
                </Btn>
                </div>
            </div>
               
        </>
    )
}