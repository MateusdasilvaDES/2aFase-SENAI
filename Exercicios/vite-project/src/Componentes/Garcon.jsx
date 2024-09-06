/*Não tem garçom de cara feia: Uma empresa abriu uma linha de 
crédito para os funcionários. O valor da prestação não pode ultrapassar 
30% do salário. Faça um programa que receba o salário, o valor do 
empréstimo e o número de prestações e informe se o empréstimo pode ser 
concedido. Nenhum dos valores informados pode ser zero ou negativo.*/

import {useState} from "react"

function Garcon() {

    const[resultado, setResultado] = useState()

    function garçom(){

       let salarario_digitado = Number(prompt('Digite o seu salario: '))
       let valor_emprestimo = Number(prompt('Digite o valor do emprestimo: ')) 
       let Numero_prestacao = Number(prompt('Digite o numero de prestações do emprestimo: '))
       let Valor_prestacao
       let condicao = 30
       let valor_porcerntagem_salario
       
      if(salarario_digitado > 0 && valor_emprestimo > 0 && Valor_prestacao > 0 ){

        valor_porcerntagem_salario = (salarario_digitado * condicao) / 100
        Valor_prestacao = valor_emprestimo / Numero_prestacao


        if(valor_porcerntagem_salario >= Valor_prestacao ){

              setResultado('Você pode fazer o emprestimo!')

        }else{

              setResultado('Você não pode fazer o emprestimo!')


        }
      }else{

             setResultado('Você não digitou um numero possitivo!')

      }
    }
  return (

    <div className = "Emprestimo_Garcon">
      <h1>Emprestimo do Garçon</h1><br />
      <button onClick={garçom}>Click aqui para validadar seu emprestimo</button><br/><br/>
      {resultado}
      
    </div>
  )
}

export default Garcon
