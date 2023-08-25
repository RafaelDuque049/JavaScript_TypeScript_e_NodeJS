
const testando = ['valorArray1', 'valorArray2', 'valorArray3']

const teste = {
    chave1: 'valor1',
    chave2: 'valor2',
    chave3: 'valor3'
}

// Utilizando o operador IN:

/*  UTILIZANDO EM OBJETO  */
for(x in teste){
    console.log(x) // Imprime as chaves do Objeto.
}

for(x in teste){
    console.log(teste[x]) // Imprime o valor dos atributos do Objeto utilizando as chaves.
}


/*  UTILIZANDO EM ARRAY  */
for(x in testando){
    console.log(x) // Retorna cada valor do Array.
}
