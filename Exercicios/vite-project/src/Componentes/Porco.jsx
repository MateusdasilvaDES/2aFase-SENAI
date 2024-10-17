
/* O porco: Faça um programa que leia o valor de um produto X e leia 
a quantidade de moedas de um cofrinho que contenha: 
 N moedas de 1 real; 
 N moedas de 50 centavos; 
 N moedas de 25 centavos; 
 N moedas de 10 centavos; 
 N moedas de 5 centavos; 
O programa deverá verificar se o total de reais que contem no cofrinho é 
o bastante para compra o produto X. 
<Muleta da compreensão: Tem que ler o preço da coisa; tem que ler a 
quantidade de cada moeda que tem no porco; calcular quantos pila tem no 
porco; ver se cabe no “orçamento”>

  */

import { useState } from "react"

function Porco() {
   
   const [resultado, setResultado] = useState()

     function verificar_produto(){
        
        let valor_produto = Number(prompt('Digite o valor do produto: '))
        let moeda_um_real = Number(prompt('Digite a quantidade de moedas de 1 real que tem no porquinho: '))
        let moeda_cinquenta_centavos = Number(prompt('digite a quantidade de moedas de 50 centavos que tem no porquinho: '))
        let moeda_vinte_cinco_centavos = Number(prompt('digite a quantidade de moedas de 25 centavos que tem no porquinho: ')) 
        let moeda_dez_centavos = Number(prompt('Digite a quantidade de moedas de 10 centavos que tem no porquinho: '))
        let moeda_cinco_centavos = Number(prompt('Digite a quantidade de moedas de 5 centavos que tem no porquinho: '))
        
        let valor_um_real = 1 * moeda_um_real
        let valor_cinquenta_centavos = 0.50 * moeda_cinquenta_centavos
        let valor_vinte_cinco_centavos = 0.25 * moeda_vinte_cinco_centavos
        let valor_dez_centavos = 0.10 * moeda_dez_centavos
        let valor_cinco_centavos = 0.05 * moeda_cinco_centavos
        
        let soma_valor_porquinho
        let valor_sobra

        soma_valor_porquinho = valor_um_real + valor_cinquenta_centavos + valor_vinte_cinco_centavos + valor_dez_centavos + valor_cinco_centavos
        valor_sobra = soma_valor_porquinho - valor_produto


        if(valor_produto > soma_valor_porquinho){
           
            setResultado('Você não pode fazer a compra do produto!' + '\nValor no porquinho: ' + soma_valor_porquinho + 
            'valor do produto: ' + valor_produto)
            
        }else{

            setResultado('Você pode fazer a compra do produto!' + '\nValor no porquinho: ' + soma_valor_porquinho + 
            'valor do produto: ' + valor_produto + 'Valor que sobra: ' + valor_sobra)

      }
     }

  return (
    <div className = "porquinho">
      <h1>Cofrinho</h1>
       <button onClick = {verificar_produto}>Comprar produto</button>
       <br/>
      <br/>
      {resultado}
    </div>
    
  )
}

export default Porco
