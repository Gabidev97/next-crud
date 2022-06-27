interface EntradaProps {
  texto: string;
  tipo?: 'text' | 'number'
  valor: any
  somenteLeitura?: boolean
  valorMudou?: (valor: any) => void
}

export default function Entrada(props: EntradaProps) {
  return (

    
    <div className={`flex flex-col`}>
      <label  className={`mb-2 ml-1`} >{props.texto}</label>
      <input
       type={props.tipo ?? 'text'}
       value={props.valor}
       readOnly={props.somenteLeitura}
       onChange={e => props.valorMudou?.(e.target.value)}
       className={`
       border border-purple-400 rounded-lg
       focus:outline-none w-full px-4 py-2 mb-7
       `}
       />
    </div>
   
  );
}
