import React, { useState } from 'react'


function Dois_copos() {

    const[resultado, setResultado] = useState()
     
     function impar_ou_par(){
  

      let numero_digitado = prompt('Digite um numero: ')
       
      if(numero_digitado % 2 == 0){

        setResultado('Esse Numero é par!')


      }else{

        setResultado('Esse Numero é impar!')

      }


     }
  return (


    <div className='DoisDiv'>
        <h1>Numero impar ou par</h1>
      <button onClick={impar_ou_par}>Click para digitar um numero</button><br/><br/>
      {resultado}
      <br/>
      <br/>
    </div>
  )
}

export default Dois_copos
