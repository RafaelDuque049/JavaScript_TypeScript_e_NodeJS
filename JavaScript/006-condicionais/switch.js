/** Função para retornar por extenso o mês representado pelo número.
    * @param {number} NumMes - Número que represente o mês do ano;
    * @returns {string} Mês por extenso com as 3 primeiras letras.
*/
function MesAno(NumMes){

    switch (NumMes) { // Declaração do SWITCH: Recebe o parametro a ser comparado.

        case 1: // Primeira condicional: Ela deve ser apresentada com o valor que se deseja ser ativada a condição.
            
            return ('Jan') // Bloco de código a ser rodado.
            
            break; // Declarar que assim que a condição for feita, parar o fluxo da condição.

        case 2:
            return ('Fev')
            break;

        case 3:
            return ('Mar')
            break;

        case 4:
            return ('Abr')
            break;

        case 5:
            return ('Mai')
            break;

        case 6:
            return ('Jun')
            break;

        case 7:
            return ('Jul')
            break;

        case 8:
            return ('Ago')
            break;

        case 9:
            return ('Set')
            break;

        case 10:
            return ('Out')
            break;

        case 11:
            return ('Nov')
            break;

        case 12:
            return ('Dez')
            break;
    
        default: // Default: condição a ser rodada caso nenhuma seja feita.
            return ('Valor repasado é incorreto.')
            break;
    }
}

const data = MesAno()

console.log(data)
