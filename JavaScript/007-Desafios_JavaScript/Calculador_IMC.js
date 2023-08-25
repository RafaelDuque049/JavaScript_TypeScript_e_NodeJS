/** Função para calcular IMC e status da saúda segundo o mesmo.
 * @param {Number} peso Recebe o peso para calcular o IMC.
 * @param {Number} altura Recebe a sua altura para calcular o IMC.
 * @returns Retorna um Objeto com o IMC e uma mensagem segundo o IMC.
 */
function CalcIMC(peso, altura){
    const IMC = peso/(altura**2)

    let resultado = String()

    switch (true) {
        case IMC < 17:
            resultado = ('Muito abaixo do peso')
            break;

        case IMC >= 17 && IMC < 18.5:
            resultado = ('Abaixo do peso')
            break;
            
        case IMC >= 18.5 && IMC < 25:
            resultado = ('Peso normal')
            break;
        
        case IMC >= 25 && IMC < 30:
            resultado = ('Acima do peso')
            break;

        case IMC >= 30 && IMC < 35:
            resultado = ('Obesidade I')
            break;

        case IMC >= 35 && IMC < 40:
            resultado = ('Obesidade II (Severa)')
            break;
    
        default:
            resultado = ('Obesidade III (Morbida)')
            break;
    }

    return { imc: IMC, status: resultado }
}

const peso = 83

const altura = 1.62

const resultado = CalcIMC(peso, altura)

console.log(`\nCom seu peso de ${peso}kg e altura de ${altura.toFixed(2)}, seu ponto de IMC é ${resultado.imc.toFixed(2)}, com status de saúde de: ${resultado.status}.`)
