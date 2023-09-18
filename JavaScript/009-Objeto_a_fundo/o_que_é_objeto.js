/* O que são Objetos:
    Objetos é uma funcionalidade das linguagens de programação criadas para alocar propriedades/Atributos/Funcionalidades de todos os tipos,
     onde pode ser acessados da forma como chave e valor.
*/// Exemplo de Objeto:
const tenis = {
    marca: "Nike", // A chave para acessar o valor "Nike", é "marca"
    nome: "AirForce", 
    tamanhos: [ 34, 36, 38, 40, 42, 44 ], // Como é possível ver, ele pode receber variados valores, de Strings à Funções.
    estoque: true,
    valor: { // É possível adicionar objetos dentro de objetos também.
        azul: 239.90,
        rosa: 249.90,
        roxo: 289.90,
        amarelo: 219.90
    }
}

console.log(typeof tenis)
console.log(tenis.valor)
console.log(tenis) // Acessar o Objeto por completo
console.log(`O ${tenis.nome} na cor roxa, está no valor de R$`, tenis.valor.roxo) // Acessar o valor requerido. | Acessando em tenis, o valor do tenis roxo no atributo valor e o nome do tênis.
