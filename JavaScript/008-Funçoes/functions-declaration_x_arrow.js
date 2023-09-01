
// O método this é utilizado para destinar a chamada de uma variável/parâmetro, até o escopo anterior ao seu(escopo pai). 
// Mas não é possível fazer o mesmo com as Arrow Functions, para o this funcionar corretamente em Arrow functions, é necessário adicionar .bind(this) ao seu final.
const lanches = {
    cardapio: [
        { nome: 'x-tudo', preço: 50},
        { nome: 'x-salada', preço: 300}
    ],

    MostrarCardapio: function(){
        this.cardapio.forEach((item) => {
            console.log(`O lanche ${item.nome}, está custando R$${item.preço} reais.`)
        })
    }, 
    
    ImprimirCardapio: function() {
        setTimeout(function(){
            this.cardapio.forEach((item) => {
                console.log(`O lanche ${item.nome}, está custando R$${item.preço} reais.`)
            })
        }.bind(this), 1000); // bind(this): O bind junto ao this, "ativa" a utilização do this do contexto para dentro da função a ser utilizada.
    }
}

lanches.MostrarCardapio()
lanches.ImprimirCardapio()


// Constructor
// A Arrow Function não contém uma construtor, sendo assim não é possível utilizar o método new nela.
class newFunc{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

const dados = new newFunc('Rafael', 18) // Podendo ser utilizado o método new apenas em Classes(Objetos), como demonstrado nesse exemplo.

console.log(dados)
