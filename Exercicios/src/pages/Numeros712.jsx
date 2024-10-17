import { useState } from "react"
import Navbar from "../components/Navbar.jsx"


function Numeros712() {
    const [inputNumero, setInputNumero] = useState("")
    const [contagem, setContagem] = useState(0)
    const [mostraResultado, setMostraResultado] = useState(false)

    function lerNumero(){

     if(inputNumero > 100 && inputNumero < 200){

       setContagem( contagem + 1)
     }
    }
  return (
    <div>
    <Navbar/>
      <h1>Exercicio 7.12</h1>
       <input type="text" 
        value={inputNumero}
        onChange={(event) => setInputNumero(event.target.value)}
       />
       
       <button onClick={lerNumero}>ler</button>
       <button onClick={() => setMostraResultado(!mostraResultado)}>RESULTADO</button>
       
       {mostraResultado &&

       <div>
          <p>Numeros na faixa 100 e 200: {contagem}</p>
       </div>
       }
       
    </div>
  )
}

export default Numeros712

