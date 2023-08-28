const soma = (valor1 = 0, valor2 = 0) => { // param = valor | É possível declarar um valor Default, para caso o usuário não declarar um valor, ele seja usado em seu lugar.
    if(typeof valor1 == 'number' && typeof valor2 == 'number') return valor1 + valor2;

    return 'Você passou dados incorretos.'
}

console.log(soma(10, 15))



function objeto(){
    return arguments;
}

console.log(objeto(1, 4, 2, 'rgr', true))
