import { useState } from "react"
import PainelAdm from "../components/PainelAdm"
import './Render.css'
import ProdutosParaMaior from "../components/ProdutosParaMaior"
import Usuario_logado from "../components/Usuario_logado"
import Login from "../components/Login"

function Render() {

    const [adm, setAdm] = useState(true)
    const [idade, setIdade] = useState(0)
    const [usuario, setUsuario] = useState(false)

  return (
    <div>
      <h1>Renderizações condicionais</h1>
      <div className="render-container">
        <button onClick = {( () => {setAdm(true)})}>Adm</button>
        <button onClick = {( () => {setAdm(false)})}>oreiaseca</button>
        { adm && <PainelAdm/>}
      </div>

      <div className = "render-container">
        <button onClick={() => {setIdade(idade-1)}}>-</button>
        {idade}
        <button onClick={() => {setIdade(idade+1)}}>+</button>
        { idade >= 18 && <ProdutosParaMaior/>}
      </div>
            
       <div className = "render-container">
          <button onClick={() => {setUsuario(true)}}>Logar</button>
          <button onClick={() => {setUsuario(false)}}>Deslogar</button>
          {usuario? <Usuario_logado/> : <Login/>}
       </div>
    </div>
  )
}

export default Render
