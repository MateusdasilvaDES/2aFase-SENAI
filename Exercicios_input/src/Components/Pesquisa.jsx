/* 7.10 - Foi feita um a pesquisa entre os habitantes de um a região e 
coletados os dados de altura e gênero (0=masc , 1=fem) das pessoas. Faça 
um programa que leia os dados de 10 pessoas e informe: 
 a maior e a menor altura encontrada; 
 a média de altura das mulheres; 
 a média de altura da população; 
 o percentual de homens na população. */

import { useState } from "react"


function Pesquisa(){
 
    const [maiorAltura, setMaiorAltura] = useState()
    const [menorAltura, setMenorAltura ] = useState()
    const [mediaMulheres, setMediaMulheres] = useState()
    const [mediaAlturaPopulacao, setMediaAlturaPopulacao] = useState()
    const [percentualHomens, setPercentualHomens] = useState()
    const [inptAltura, setInptAltura] = useState()
    const [inptSexualidade, setInptSexualidade] = useState()
    let maior_ltura = 0
    let menor_altura = 0 
    let media_altura_mulheres = 0
    let media_altura_populacao = 0
    let percntual_homens = 0

    function confirmar_dados(){

      





    }

     
  return (
    <div>
      <h1>Pesuisa de altura</h1>
      <label htmlFor="labelAltura">Digite sua altura: </label>
      <input type="text" id="inputAltura" 
      value = {inptAltura} 
      onChange = {(Event => {setInptAltura(Event.target.value)})}/><br/><br/>

      <label htmlFor="LabelSexualidade">Digite M se você for masculino e F se vc for feminino:</label>
      <input type="text" id ="inputSexualidade"
      value = {inptSexualidade}
      onChange={(Event => {setInptSexualidade(Event.target.value)})}/><br/><br/>

      <button onClick={confirmar_dados}>Confirmar dados</button><br/><br/>
      <button onClick={ver_detalhes}>Ver detalhes</button>
    </div>
  )
}

export default Pesquisa
