import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from '../core/Clientes'



interface FormularioProps{
cliente: Cliente
clienteMudou: (cliente: Cliente) => void
cancelado: () => void


}

export default function Formulario(props: FormularioProps){
const id = props.cliente?.id ?? null
const [nome, setNome] = useState(props.cliente?.nome ?? '')
const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id ? (
                <Entrada
                somenteLeitura 
                texto="Codigo" 
                valor={id}/>
             ): false}
            <Entrada 
            texto="Nome" 
            valor={nome}
            valorMudou={setNome}
            />

            <Entrada 
            texto="Idade" 
            tipo="number" 
            valor={idade}
            valorMudou={setIdade}
            />
            <div className={`flex justify-end mt-5`}>
            <button  
             className={`bg-red-400 mr-4 px-4 py-2 rounded-md`}
             onClick={() => props.clienteMudou?.(new Cliente(nome,idade,id))}            
            >
                {id ? 'alterar' : 'Salvar'}
            </button>
            <button onClick={props.cancelado} className={`bg-green-600 mr-4 px-4 py-2 rounded-md`}>
                Cancelar
            </button>
            </div>
        </div>
    )
}