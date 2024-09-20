
function Relatorio_uber(props) {
  return (
    <div>
      <h2>Informações de sua estadia:</h2>
      <p>Quantidade de diarias usadas: {props.infos.quantidade_diarias}</p>
      <p>preço da diaria: {props.infos.preco_diaria}</p>
      <p>Valor da multa: {props.infos.valor_multa}</p>
      <p>Desconto de sua carteirinha uber: {props.infos.desconto_da_carteirinha} </p>
      <p>Desconto por conhecer a atendente: {props.infos.desconto_da_relação_emocional}</p>
      <p>Valor total a pagar sem os descontos: {props.infos.valor_total_sem_desconto}</p>
      <p>Valor total a pagar com descontos: {props.infos.valor_com_desconto}</p>
    </div>
  )
}

export default Relatorio_uber

