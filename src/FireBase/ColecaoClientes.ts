import ClienteRepositorio from "../core/ClienteRepositorio";
import Clientes from "../core/Clientes";
import firebase from '../FireBase/Config'

export default class ColecaoClientes implements ClienteRepositorio {

#conversor = {
    toFirestore(cliente: Clientes){
        return {
            nome: cliente.nome,
            idade: cliente.idade
        }
    },
    fromFirestore(snapshot:firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Clientes {
        const dados = snapshot.data(options)
        return new Clientes(dados.nome, dados.idade, snapshot.id)
    }
}



    async salvar(cliente: Clientes): Promise<Clientes> {
        if(cliente?.id){
          await  this.colecao().doc(cliente.id).set(cliente)
          return cliente
        } else {
          const docRef =  await  this.colecao().add(cliente)
          const doc = await docRef.get()
          return doc.data()
        }
        
        
      
    }

    async excluir(cliente: Clientes): Promise<void> {
        return this.colecao().doc(cliente.id).delete()
    }

    async obterTodos(): Promise<Clientes[]> {
  const query = await this.colecao().get()
  return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao(){
        return firebase.firestore().collection('clientes').withConverter(this.#conversor)
    }
}