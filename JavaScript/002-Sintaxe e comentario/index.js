console.log('Opa, boa tarde!')

// Comentário simples

/* Comentário de multiplas linhas

1.comentário
2.comentário
3.comentário
*/


// Logo abaixo, está um exemplo de comentário para documentação de funções(JSDoc).

/** Retorna o valor definido em "numero" pelo número adicionado em "multiplicador". 
 * @param {number} numero - Valor a ser multiplicado.
 * @param {number} multiplicador - Número para multiplicar o valor desejado.
 * @returns {number} Retorna o número multiplicado pelo valor definido.
 */
function Multiplicar(numero, multiplicador){
    return numero * multiplicador
}

const result = Multiplicar(10, 3);

console.log(result)
