class pessoa{
    constructor(nome, idade, sexo){
        this.nome = nome
        this.idade = idade
        this.sexo = sexo
    }
}

let pessoa2 = new pessoa('Rafael', 18, 'M'); // Metodo NEW: ele faz a instância(copia) de uma classe em forma de Objeto. Podendo fazer instanciação de funções.

console.log('nome ->', pessoa2.nome)
console.log('idade ->',pessoa2.idade)
console.log('sexo ->', pessoa2.sexo)

console.log(pessoa.prototype.nome)


console.log('Type "pessoa":', typeof pessoa) // Output: Function
// Não podendo declarar diretamente os valores dentro de sua classe.

console.log('Type "pessoa2":', typeof pessoa2) // Output: Object
// Podendo declarar diretamente os valores de seu Objeto.



// Desestruturando a instância.
let {nome, idade, sexo} = pessoa2

console.log(nome, idade, sexo)
