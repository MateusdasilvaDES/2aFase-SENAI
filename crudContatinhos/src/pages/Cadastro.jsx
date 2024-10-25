
import { useState, useContext } from 'react'
import Navbar from '../components/Navbar'
import { GlobalContext } from '../contexts/GlobalContext'
import './Cadastro.css'

function Cadastro() {
    const[inputNome,setInputNome, ] = useState('')
    const{contatinho, setContatinho, contatinhos, setContatinhos} = useContext(GlobalContext)
    
    function cadastrarContatinho(){
        // setContatinho(inputNome)
        setContatinhos([...contatinhos, inputNome])
        console.log(contatinhos);

    }
  return (
    <div>
       <Navbar/>
       <h1>Cadastre seu contatinho</h1>
       <div className="input-container">
          <label htmlFor="">Nome do Contatinho</label>
          <input type="text"
             value={inputNome}
             onChange={(event) => setInputNome(event.target.value)}
          />
       </div>
       <button onClick={cadastrarContatinho}>Cadastrar Contatinho</button>
       <div className="contatinhos">
          {contatinhos.map( (c, index) => (
            <div

              className='card-contatinho' 
              key={index}>
              <p>{c}</p>
            </div>
          ) )}
       </div>
    </div>
  )
}

export default Cadastro
