import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import '../App'

/*Faça um algoritmo que leia dois números e mostre todos os números 
pares contidos entre eles. 
Exemplo: 
 - Limite inferior: 3 
 - Limite superior: 12 
 - Saída: 4 6 8 10*/

function Exercicio713() {

    const [inptUm, setInptUm] = useState('')
    const [inptDois, setInptDois] = useState('')
    const [resultado, setResultado] = useState('')
    
    let vetor = [];

    function butResultado(){

       for( let i = inptUm  ; i < inptDois;i++){

         if(i % 2 == 0){

           vetor.push(i)
          
         }
         setResultado(vetor)
      

       }
       
    }
  return (
    <div className='div_713'>
      <Navbar/>
      <h1>Exercicio 7.13</h1>
     Digite o primeiro numero:
     <br />
      <input type="text" 
      value= {inptUm}
      onChange={(event) => setInptUm(event.target.value)}
      />
     <br/>
     <br/>
      Digite o segundo numero:
      <br />
      <input type="text" 
      value= {inptDois}
      onChange={(event) => setInptDois(event.target.value)}
      />
      <br/>
      <br/>

      <button className='butResultado' onClick={butResultado}>RESULTADO</button>
       {resultado}
    </div>
  )
}

export default Exercicio713
