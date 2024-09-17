import './App.css'

// import questão 1

import Copo_meio_cheio from './Componentes/Copo_meio_cheio.jsx'
import './Componentes/Copo_meio_cheio.css'

// import questão 2

import Dois_copos from './Componentes/Dois_copos.jsx'
import './Componentes/Dois_copos.css'

// import questão 3

import Garcon from './Componentes/Garcon.jsx'
import './Componentes/Garcon.css'


// import questão 4

import Velocidade_luz from './Componentes/Velocidade_luz'
import './Componentes/Velocidade_luz.css'

// import questão 5
import Viagem from './Componentes/Viagem'


function App() {
 
  return (
    <>
      <Viagem/>
      <Velocidade_luz/>
      <Garcon/>
      <Dois_copos/>
      <Copo_meio_cheio />
      
    </>
  )
}

export default App
