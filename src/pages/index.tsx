import { useEffect, useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Clientes from "../core/Clientes";
import ColecaoClientes from "../FireBase/ColecaoClientes";
import ClienteRepositorio from '../core/ClienteRepositorio'

export default function Home() {

  const repo: ClienteRepositorio = new ColecaoClientes() 

  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");
  const [cliente, setCliente] = useState<Clientes>(Clientes.vaziu())
  const [clientes, setClientes] = useState<Clientes[]>([])

// eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(obterTodos,[])

function obterTodos(){
  repo.obterTodos().then(clientes => {
    setClientes(clientes)
    setVisivel('tabela')
  })
}


  function clienteSelecionados(cliente: Clientes) {
 setCliente(cliente)
    setVisivel('form')
  }

  async function clienteExluidos(cliente: Clientes) {
    await repo.excluir(cliente)
  obterTodos()
  }

 async function salvarCliente(cliente: Clientes){
 await repo.salvar(cliente)
  obterTodos()
  }

  function NovoCliente(){
    setCliente(Clientes.vaziu())
    setVisivel('form')
  }

  

  return (
    <div
      className={`
    flex items-center justify-center  h-screen font-bold
    bg-gradient-to-r from-blue-300 to-purple-700
    `}
    >
      <Layout titulo="Cadastro Simples">
        {visivel === "tabela" ? (
          <>
            <div className=" flex justify-end">
              <Botao onClick={NovoCliente} className="mb-4">Novo Cliente</Botao>
            </div>

            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionados}
              clienteExcluido={clienteExluidos}
            />
          </>
        ) : (
          <Formulario 
          clienteMudou={salvarCliente}
          cliente={cliente}
          cancelado={()=> setVisivel('tabela')}
          />
        )}
      </Layout>
    </div>
  );
}
