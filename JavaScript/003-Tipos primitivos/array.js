let arr = [1, 2, 3, 'numero 10', true, undefined] // um Array é uma lista onde pode receber todos os tipos de tipos primitivos.
console.log(arr)


console.log(arr.length) // length = Retorna o tamanho/quantidade de itens no Array.
console.log("********************")

/*  ForEach  */
arr.forEach((valor, indice) => { // Passa por todos os itens da lista, podendo fazer uma interação com eles. (parâmetros: valor/item, indice & )
    console.log(valor, indice)
}) 
