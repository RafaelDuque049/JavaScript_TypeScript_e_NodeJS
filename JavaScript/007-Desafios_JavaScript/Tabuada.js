/** Recebe o número desejado para multiplicão, e imprime no console a tabuada segundo o número.
 * 
 * @param {number | float} multiplicador Recebe um número flutuante ou inteiro para criar a tabuada.
 */
const tabuada = (multiplicador) => {
    for(let num = 1; num <= 10; num++){
        console.log(`${multiplicador} x ${num} = ${num * Number(multiplicador)}`)
    }
}

const mult = 8

tabuada(mult)
