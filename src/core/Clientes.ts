export default class Clientes {
    #id: string
    #nome: string
    #idade: number


    constructor(nome: string, idade: number, id: string = null){
        this.#nome = nome
        this.#idade = idade
        this.#id = id
    }

static vaziu(){
    return new Clientes('' , 0)
}


get id(){
    return this.#id
}

get nome(){
    return this.#nome
}

get idade(){
    return this.#idade
}

}