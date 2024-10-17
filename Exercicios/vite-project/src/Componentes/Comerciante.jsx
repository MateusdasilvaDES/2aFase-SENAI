/*  Um comerciante comprou um produto e quer vendê-lo com lucro de 
45% se o valor da compra for menor que R$20,00; caso contrário, o lucro 
será de 30%. Faça um programa que entre com o valor do produto e mostre 
o valor de venda. */

import { useState } from "react"

function Comerciante() {

 const [resultado, setResultado] = useState()

  function confirmar_venda(){

    let valor_digitado = Number(prompt('Digite o valor do produto: '))
    let valor_porcentagem
    let valor_total


    if(valor_digitado >= 20){
      
        valor_porcentagem = (valor_digitado * 30) / 100
        valor_total = valor_digitado + valor_porcentagem

        setResultado('O valor total com a porcentagem adional sera: ' + valor_total)

    }else{
     
        valor_porcentagem = (valor_digitado * 45) / 100
        valor_total = valor_digitado + valor_porcentagem

        setResultado('O valor total com a porcentagem adional sera: ' + valor_total)
     }
    }

  return (
    <div className = "Ativ_comerciante">
      <h1>Comerciante</h1>
      <button onClick = {confirmar_venda}>Informar venda</button>
      <br/>
      <br/>
      {resultado}
    </div>
  )
}

export default Comerciante
