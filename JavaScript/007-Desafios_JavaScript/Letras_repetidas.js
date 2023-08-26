/** Conta quantas vezes cada letra se repete em uma palavra/texto.
 * 
 * @param {string} palavra Recebe uma string para contar as repetições.
 * @returns {object} Retorna um objeto com as letras que repetiram e quantas vezes se repetem.
 */
function letrasRepetidas(palavra){
    let qntd_repetidas = {
        quantidade: palavra.length,
    }

    palavra.replaceAll(' ', '').split('').forEach((letra) => {
        letra in qntd_repetidas
        ? qntd_repetidas[letra]++
        : qntd_repetidas[letra] = 1;
    });

    return qntd_repetidas
}

const palavra = letrasRepetidas('teste teste')

console.log(palavra)
