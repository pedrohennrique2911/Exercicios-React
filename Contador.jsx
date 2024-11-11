import { useState } from "react"

function Contador(){
    const [contador, setContador] = useState(0)

    const incrementar = () => {

        setContador(contador + 1)
    }

    const decremenatar = () =>{
        setContador(contador - 1)
    }
    return(
        <>
        <h2>Contador</h2>
        <p>Contagem: {contador}</p>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decremenatar}>Decrementar</button>                 
        </>
    )
}

export default Contador