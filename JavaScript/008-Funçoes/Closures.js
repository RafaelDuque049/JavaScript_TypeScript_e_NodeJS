// Closures(Clausuras), é a criação de funções e utilização de uma função que está alocada dentro de uma mesma função.


function Perfil(nome, idade){
    this.nome = nome
    this.idade = idade

    function apresentar(){ // Um ponto interessante a se levantar, é que está função não pode ser acessado por quem está de fora do escopo.
        return `Olá ${this.nome}, sua idade segundo questionário é ${this.idade}` 
    }

    this.SeuPerfil = () => { // Já esta, pode ser acessada já que ela é definida junto ao this, dando um "contexto" à sua existência.
        return { nome: this.nome, idade: this.idade }
    }

    return apresentar()
}

const teste = Perfil('Anderson', 35) 

console.log(teste) // Olá Anderson, sua idade segundo questionário é 35


const teste2 = new Perfil()

console.log(teste2) /*
Perfil {
  nome: undefined,
  idade: undefined,
  SeuPerfil: [Function (anonymous)]
}
*/// Note que a função "apresentar()", não é exibida na impressão, demonstrando que de fato, ela é privada de uso externo.


const teste3 = new Perfil('Carlos', 21)

console.log(teste3.SeuPerfil())
