console.log(123) // Tipo Number
console.log("123") // Tipo String

console.log("123" + 1) // Quando à uma soma entre uma String e um Number, o JS entende que você deseja concatenar. 
// output: 1231
console.log("123" - 2) // Mas quando à uma subtração entre uma String e um Number, ele converte a String para Number e faz a subtração. 
// output: 121

// Aviso: Caso a String não possa ser convertida para Number, o valor vai ser NaN(Not a Number/Não é um número).


/*  Converter String em Number  */
console.log(Number("12312")) // Output: Number
console.log(Number("12312a")) // Output: NaN (Not a Number)


console.log(typeof Number("1295")) // typeof = retorna o tipo primitivo do elemento (Boolean, Number, String, Array & Object)
