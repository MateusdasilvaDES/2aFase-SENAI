import { useState } from "react"

function Velocidade_luz() {
  
  const [resultado, setResultado] = useState()
  
  function segundos(){

    let distancia_km = Number(prompt('Digite a distancia em km para o destino: '))
    let valor_velocidade_luz = 300000
    let Valor_segundos
    let minuto
    let horas
    let um_dia
    let messes
    let anos 
    let texto = ''

         Valor_segundos = distancia_km / valor_velocidade_luz

        
         texto = "Segundos: " + Valor_segundos

        if(Valor_segundos > 60){

          minuto = Valor_segundos / 60
            
        
          texto += " | Minutos: " + minuto
       }

        if(minuto > 60){

          horas = minuto / 60

       
            texto += " | Horas: " + horas
       }

       if(horas > 24){

         um_dia = horas / 24

        
        texto += " | um dia: " + um_dia
       }
       if(um_dia > 30 ){
  
         messes = um_dia / 30
 
        
        texto += " | messes: " + messes
      }   
      if(messes > 12){

        anos = messes / 12

        
            texto += " | anos: " + anos
   }
   setResultado(texto)
  }
    return (
    <div className ="velocidade_luz">
       <h1>Velocidade da luz</h1><br/>
       <button onClick = {segundos}>Calcular</button><br/><br/>
      {resultado}
    </div>
  )
}

export default Velocidade_luz
