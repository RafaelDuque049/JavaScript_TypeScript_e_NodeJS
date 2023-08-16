
console.log(10 + 2) // Quando à um sinal de igual e dois números, o JS entende que você deseja fazer uma conta de adição.


console.log("10" + 2) // Agora, quando um ou os demais valores é uma String, ele entende que se deseja fazer uma concacetenação.


// Mas se o operador aritmédico é diferente de sinal de adição, ele entende que se deseja fazer uma conta matemática.
console.log("10" - 2) 
console.log("10" - "2") 


console.log("10" / 2)
console.log("10" / "2")

console.log("10" * 2)
console.log("10" * "2")


/*  Incremento(++) e Decremento(--)  */
// Incremento funciona como um operador de adição, mas apenas adiciona mais 1 por chamada, Exemplo:
let num = 10
console.log("Váriavel num =", num)

num++ // Faz a soma do valor mais 1, ou seja: num(10) + 1 = 11
console.log("Váriavel num =", num)

// Agora o incremento faz ao contrário, ele subtrai 1, observe abaixo:
num-- // num(11) - 1 = 10
console.log("Váriavel num =", num)
