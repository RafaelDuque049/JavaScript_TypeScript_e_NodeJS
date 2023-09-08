
// Funções construtoras, são funções(Declaration e Expression) que são preparadas para se "transformar" em objeto no futuro.
function Calculadora(num1, num2)
{
    this.PrimeiroNumero = num1
    
    this.SegundoNumero = num2

    this.soma = () => {
        return num1 + num2
    }

    this.subtracao = () => {
        return num1 - num2
    }
}


const calculado = new Calculadora(10, 5) // Instância a função construtora Calculadora, retornando as funções dentro do Objeto.


console.log(typeof calculado) // Output: Object


const somados = calculado.soma()
const subtracao = calculado.subtracao()


console.log(calculado)

console.log(somados)
console.log(subtracao)
