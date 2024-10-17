import { useState } from "react"

/* Faça um programa que leia duas notas parciais obtidas por um 
aluno qualquer numa disciplina qualquer ao longo de um semestre 
qualquer, e calcule a sua média. De posse da média, esta deve ser 
convertida em conceito que é o novo hype do momento na educação!
A conversão deve seguir a regra descrita abaixo:
Nota Conceito
Entre ]9.0[ e [10.0] A
Entre ]7.5[ e [9.0] B
Entre ]6.0[ e [7.5] C
Entre ]4.0[ e [6.0] D
Entre [0.0] e [4.0] E
O resultado deste programa deve ser um relatório contendo as notas do 
aluno, sua média e o conceito atingido.*/


function Nota_parcial() {

  const [resultado, setResultado] = useState()

    function calcular(){

      let nota_um = Number(prompt('Digite a primeira nota: '))
      let nota_dois = Number(prompt('Digite a segunda nota: '))
      let media 

      media = (nota_um + nota_dois) / 2

      switch(true){

        case media >= 9.0 && media <= 10.0:

         setResultado('Nota 1: ' + nota_um  + '\nNota_dois: ' + nota_dois + 'Media: ' + media +'\nVocê tirou A na media final!')
         break
        
        case media >= 7.5 && media <= 9.0:

         setResultado('Nota 1: ' + nota_um  + '\nNota_dois: ' + nota_dois + 'Media: ' + media + '\nVocê tirou B na media final!')
         break
        
        case media >= 6.0 && media <= 7.5:

         setResultado('Nota 1: ' + nota_um  + '\nNota_dois: ' + nota_dois + 'Media: ' + media + '\nVocê tirou C na media final!')
         break

        case media >= 4.0 && media <= 6.0:

         setResultado('Nota 1: ' + nota_um  + '\nNota_dois: ' + nota_dois + 'Media: ' + media + '\nVocê tirou D na media final!')
         break
        
        case media >= 0 && media <= 4.0:

         setResultado('Nota 1: ' + nota_um  + '\nNota_dois: ' + nota_dois + 'Media: ' + media + '\nVocê tirou E na media final!')
         break
       }
    }
    
  return (
    <div className="Nota_parcial">
      <h1>Nota parcial</h1>
      <button onClick = {calcular}>Calcular notas</button>
      <br/>
      <br/>
      {resultado}
    </div>
  )
}

export default Nota_parcial
