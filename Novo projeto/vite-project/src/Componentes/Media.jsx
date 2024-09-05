
import {useState} from 'react'


function Media() {

    const [resultado, setResultado] = useState();
   

    function CalcularMedia(){

       let nota_um = Number(prompt('Digite o primeiro numero: '))
       let nota_dois = Number(prompt('Digite o segundo numero: '))

       let media = (nota_um + nota_dois) / 2

        setResultado(media)
    }

  return (
    <div className='Media_Container'>
      <h2>Exercicio para calcular media de 2 numeros</h2>
      <button onClick={CalcularMedia}>Calcular</button>
      <div>

         Media: {resultado}
      </div>
    </div>
  )
}

export default Media
