/*  Object/Objeto  */
// Object é como se fosse um Array/lista, mas cada elemento recebe um 'nome' como indice, esses indices se chama keys/chaves.


// Representação de um Array:
let array = [1, 2, 3, 4, 5] 

console.log(array, typeof array) 
// Out: Object -> O JavaScript interpreta o Array como um Object, mas possuí seus próprios metodos.


// Representação de um objeto:
let object = {
    valor1: 1,
    valor2: 2,
    valor3: 3,
    outro_valor: 4,
    mais_um_valor: 5
}

console.log(object, typeof object)

// ================================================== //

// Um Object também pode guarda quaisquer tipo de valor:
let obj = {
    lista1: ['Rafael', 'pereira'],
    valor1: undefined,
    objeto1: {
        nome: 'José',
        nome2: 'Julio'
    },
    numero: 120
}

console.log(obj)

// ================================================== //

// Exemplo de como um Object pode ser utilizado:
const tenis = {
    item: 'Tenis',
    nome: 'AirForce',
    valor: 129.90,
    tamanhos: [34, 36, 38, 40, 42],
    marca: 'Nike',
    estoque: true
}

// Para extrair o valor de uma chave, se utiliza esse construtor -> Object.Key
console.log(`
    \rItem: ${tenis.item}.
    \rNome do item: ${tenis.nome}.
    \rPreço: ${tenis.valor}
    \rTamanhos: ${tenis.tamanhos}
`)
