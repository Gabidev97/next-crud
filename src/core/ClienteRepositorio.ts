import Clientes from "./Clientes";

export default interface ClienteRepositorio{
    salvar(cliente: Clientes): Promise<Clientes>
    excluir(cliente: Clientes): Promise<void>
    obterTodos(): Promise<Clientes[]>
}