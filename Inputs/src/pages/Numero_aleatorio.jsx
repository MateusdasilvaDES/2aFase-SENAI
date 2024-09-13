import { useState } from "react"

function numero_aleatorio() {

    const [resultado,setResultado] = useState()
    const [aleatorio, setAleatorio] = useState()

      setAleatorio(Math.floor(Math.random() * 10))

       return (
        <div>
          <h1>Numero aleatorio</h1>
          Digite o numero: <input type="text" onChange={(event) => {setResultado(event.target.value)} } />
          <br/>
          <br/>
          <button onClick = {ola}>Tentativa</button>
        </div>
      )
    }
    
    export default numero_aleatorio
    