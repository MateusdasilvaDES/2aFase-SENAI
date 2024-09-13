import { useState } from "react"
import './Dia_semana.css'

function Dia_semana() {

   /*Peça ao usuário que insira um número de 1 a 7 e, em seguida,
    mostre o dia da semana correspondente (por exemplo, 1 = Domingo, 2 = Segunda, etc.). */

    const [numero,setNumero] = useState("")
    const [saida,setSaida] = useState("")

  function confirmar(){

      // setSaida('Segunda')

   switch(Number(numero)){

      case 1:

        setSaida('Segunda')
        break
      
      case 2:

        setSaida('Terça')
        break

      case 3: 

        setSaida('Quarta')
        break

      case 4: 

        setSaida('Quinta')
        break

      case 5: 

        setSaida('Sexta')
        break

      case 6: 

        setSaida('Sabado')
        break

      case 7: 
        
        setSaida('Domingo')
        break

      default:

        setSaida('Você não digitou um numero valido!')
    }
   }

  return (
    <div>
      Digite um numero de 1 a 7: <input type="text" 
      value={numero}
      onChange= { (event) => {setNumero(event.target.value)} }
      />
      <br/>
      <br/>
      <button onClick = {confirmar}>Confirmar</button>
      <br/>
      <br/>
      <div className = "cor_saida">
      {saida}
      </div>
    </div>
  )
}

export default Dia_semana
