/* 
Formas de escrever uma string:
    1. 'Aspas simples'
    2. "Aspas duplas"
    3. `Com crases`
*/

console.log('Olá mundo!') // Aspas simples;
console.log("Olá mundo!") // Aspas duplas;
console.log(`Olá mundo!`) // Crase: Pode receber em seu interior aspas simples e duplas, e pode imprimir valores.


/*   Utilizando crases:   */
const valor = 10;

// É possível adicionar váriaveis às Strings utilizando crases junto ao '${nome_variavel}', como no exemplo abaixo:
console.log(`O valor de 'X' é: ${valor}`) 


// Transformar qualquer tipo primitivo em String.
console.log(String('Transforma quaisquer valor em String'))
console.log(String(3229472394)) // Transformou um valor Number em String.
