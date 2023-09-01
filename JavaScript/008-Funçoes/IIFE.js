// IIFE = immediately Invoked Function Expression
// IIFE = Expressão de Função Invocada Imediatamente

// IIFE é um método de auto invocação de função. Ou seja, a própria função se chama;
(function(param1, param2){
    console.log(param1 + param2)
}
)(10, 25)

// Também é possível utilzar Arrow function no IIFE;
((param1, param2) => {
    console.log(param1 + param2)
}
)(10, 25)
