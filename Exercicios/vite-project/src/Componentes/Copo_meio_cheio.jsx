import { useState } from 'react'


function Copo_meio_cheio() {

    const [resultado, setResultado] = useState()

    function numeros(){

    let numero 

    numero = Number(prompt('Digite o numero: '))
    
    if(numero > 0){

         setResultado("Numero é possitivo!")
    }else if(numero < 0){

        setResultado("Numero é negativo!")

    }else{

      setResultado("Você não digitou nenhum numero!")


      }
    }

  return (

    <div className='Numero_possitivo'>
      <h1>Numero possitivo, negativo ou nulo</h1>
      <button onClick = {numeros}>Click aqui para digitar um numero!</button><br/><br />
      {resultado}

    </div>
  )
}

export default Copo_meio_cheio