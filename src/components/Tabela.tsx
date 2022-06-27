import Clientes from "../core/Clientes";
import { Edicao, Trash } from "./Icones";

interface TabelaProps {
  clientes: Clientes[]
  clienteSelecionado?:( cliente: Clientes ) => void
  clienteExcluido?:( cliente: Clientes ) => void
}

export default function Tabela(props: TabelaProps) {


const exibirAcoes = props.clienteSelecionado || props.clienteExcluido 



  function renderizarCabecalho() {
    return (
      <tr>
        <th className="p-4 text-left">Codigo</th>
        <th className="p-4 text-left">Nome</th>
        <th className="p-4 text-left">Idade</th>
        {exibirAcoes ? <th className="p-4">Ações</th> : false}
      </tr>
    );
  }

  function renderizarDados() {
    return props.clientes?.map((cliente, i) => {
      return (
        <tr key={cliente.id}
        className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-300'}`}>
          <td className="text-left p-4">{cliente.id}</td>
          <td className="text-left p-4">{cliente.nome}</td>
          <td className="text-left p-4"> {cliente.idade}</td>
           {exibirAcoes ?  renderizarAcoes(cliente) : false}
        </tr>
      );
    });
  }

  function renderizarAcoes(cliente: Clientes){
    return (
      <td className="flex justify-center">
        {props.clienteSelecionado ? ( 
          <button onClick={() => props.clienteSelecionado?.(cliente)} className={`
          flex justify-center items-center
          text-green-600 cursor-pointer p-2 m-1
          `}>
            {Edicao}
          </button>
        ): false}
        {props.clienteExcluido ? (
          <button  onClick={() => props.clienteExcluido?.(cliente)}  className={`
          flex justify-center items-center
          text-red-600 cursor-pointer p-2 m-1
          `}>
            {Trash}
           </button>
         ): false}
        
      </td>
    )
  }



  return (
    <table className="w-full rounded-lg overflow-hidden">
      <thead className={` text-gray-100 bg-gradient-to-r from-purple-300 to-purple-800`}>
        {renderizarCabecalho()}
        </thead>

      <tbody>{renderizarDados()}</tbody>
    </table>
  );
}
