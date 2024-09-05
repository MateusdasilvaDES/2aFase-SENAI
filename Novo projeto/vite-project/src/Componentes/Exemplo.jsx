import {useState} from "react"

function Exemplo() {

    const [resultado, setResultado] = useState(0)

   function aumentar(){

     setResultado(resultado + 1)

   }
   function Diminuir(){

     setResultado(resultado - 1)
  
   }

  return (
    <div>
      <button onClick ={aumentar}>+</button>
      <button onClick = {Diminuir}>-</button>
      {resultado} 
    </div>
  )
}

export default Exemplo
