
/* 5.7// Nosso amigo Mano Juca ganhou tanto dinheiro no Uber que resolveu 
tirar férias. Sem destino, sem regras, vida loka, lobo solitário, sem 
destino, um dia em cada lugar, sem dia pra voltar, até o dinheiro 
acabar...
Logo nos primeiros dias ele encontrou um paraíso e resolveu quebrar sua 
única regra e ficar alguns dias por ali. Encontrou um albergue meio bom
e fez check in, mas não conseguiu entender de forma alguma como o hotel 
calculava o valor da conta. Ele é meio burro, vocês sabem...
O albergue utilizas faixas de preço de acordo com o número de diárias
Até 5 diárias, o preço por diária é R$100,00;
De 6 a 10 diárias, R$90,00 por dia;
A partir de 11 dias, sai R$80,00 por dia;
Outros fatos relevantes para determinar o valor da conta:
- Ele acabou ganhando um desconto a mais de 10% do valor total porque 
teve um “envolvimento emocional” com a moça que trabalha no balcão;
- Quando ele abriu a carteira pra pagar, a moça viu que ele tem a 
carteirinha da Associação dos motoristas do Uber de Palhoça, entidade 
com a qual o albergue tem convênio, e aplicou mais 15% (do valor total)
de desconto;
- Ele se passou e vai pagar multa de R$150 por danos materiais.
Criar um programa que lê o número de dias que ele vai ficar no albergue 
e apresente o valor final da conta e sua composição (os detalhes, 
pagamentos, descontos...); */

import { useState } from "react"

function Uber() {
   const [resultado, setResultado] = useState()
   const [quantDiaria, setQuantDiaria] = useState()

     function valor_final(){

      let valor_cinco_diaria = 100
      let valor_seis_a_dez = 90
      let valor_onze_diarias = 80 
      let desconto_um = 10 
      let desconto_carteirinha = 15
      let munta_dados_morais = 150
      let valor_total
      let valor_total_desconto

     if({quantDiaria} >= 1 && {quantDiaria} <= 5 ){

      valor_total = {quantDiaria} * 100
      

        let relatorio = { 
        
         quantidade_diarias: quantDiaria,
         

        }

     }



     }
  return (
    <div>
      <h1>Mano juca do Uber</h1>
      <label htmlFor = "">quantidade de diaria: </label><br/><br/>
      <input type = "" id = "inputDiarias"
        value = {quantDiaria}
        onChange = { (Event => {setQuantDiaria(Event.target.value)})}
      />
      <button onClick = {valor_final}>Valor total</button>
    </div>

  )
}

export default Uber
