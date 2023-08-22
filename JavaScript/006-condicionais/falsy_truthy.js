// falsy = "", false, 0, NaN, undefined e null.
// truthy = Todos os valores que são diferentes do falsy.


if(0){ // Valor Falsy
    console.log('Bom dia!')
} else{
    console.log('Boa tarde!')
}


if(1){ // Valor diferente de Falsy.
    console.log('Bom dia')
} else if(0) {
    console.log('Boa tarde!')
}


if(!(false)){ // Valor falsy, mas utilizando operador NOT(Verifica se o valor é false, se for false retorna true)
    console.log('Feliz pascôa!')
} else if(true){
    console.log('Feliz Natal!')
}
