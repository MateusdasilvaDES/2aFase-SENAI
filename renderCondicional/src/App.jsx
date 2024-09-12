import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'
import Render from './pages/Render'

function App() {
  const [pagina,setPagina] = useState(<Home/>)
  
  return (
    <>
      <nav>
        <button onClick = {() => {setPagina(<Login/>)}}>Login</button>
         <button onClick = {() => {setPagina(<Cadastro/>)}}>Cadastro</button>
         <button onClick = {() => {setPagina(<Home/>)}}>Home</button>
        <button onClick = {() => {setPagina(<Render/>)}}>Render</button>
      </nav>
      {pagina}
      
    </>
  )
}

export default App
