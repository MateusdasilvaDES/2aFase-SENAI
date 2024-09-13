import { useState } from 'react'
import './App.css'
import Maior_idade from './components/Maior_idade'
import Menor_idade from './components/Menor_idade'
import Dia_semana from './pages/Dia_semana'

function App() {
  
  const [inputIdade,setInputIdade] = useState()
  const [maior, setMaior] = useState(false)
  const [menor,setMenor] = useState(false)
  const [pagina, setPagina] = useState()
   
    function processarIdade(){

    if(inputIdade >= 18){

      setMaior(true)
      setMenor(false)

    }else{

      setMenor(true)
      setMaior(false)
    }
  }
  return (
    <>
      <h1>Aula de como pegar valor de input</h1>

       idade: <input type="number" className='formularios'
       value= {inputIdade}
       onChange= { (event) => {setInputIdade(event.target.value)} }

       />
       <br/>
       <br/>
       <button onClick = {processarIdade}>Processar idade</button>
       <button onClick = {() => {setPagina(<Dia_semana/>)}}>Atividade</button>
       <br/>
        {maior && <Maior_idade/>}
        {menor && <Menor_idade/>}
        {pagina}
    </>
  )
}

export default App
