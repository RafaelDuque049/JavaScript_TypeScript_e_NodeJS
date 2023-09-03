// Strict mode: O strict mode é uma declaração onde você define o código de JavaScript mais aprimorado;
// Com "use strict", ele aprimora o código para ocorrer erros em momentos que devia acontecer erros, mas não acontece.

"use strict"; // Definir o uso restrito

((param1, param2) => {
    teste = param1+param2
    console.log(teste)
}
)( 10, 20 )


console.log(teste) // Caso não houve a declaração do strict mode, o console iria imprimir a mensagem que está dentro do IIFE.
