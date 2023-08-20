/*
Escopo: Determina quais são os dados que podem ser acessados em determinada parte do código.
*/

// Situação onde o dados está sendo chamado dentro de um escopo;
const nome = "Marcos";
{
    console.log(nome) // Pode ser utilizado o dado já que a variável está fora do escopo. Podendo quem tiver dentro, utilizar dados fora do escopo atual.
}



// Situação onde o dado e a chamada da mesma, está dentro do mesmo escopo;
{
    const idade = 10;
    console.log(idade) // É possível utilizar o dado, já que ambos estão dentro do mesmo escopo.
}



// Situação onde o dado está dentro do escopo, mas a chamada de uso dele, não está;
{
    const OndeMora = 'São Paulo';
}

// Não pode ser utilizado a variável já que está dentro de um escopo, não podendo ser acessado por aqueles fora do escopo.
console.log(OndeMora) // Vai ser retornado um erro, já que a variável não foi declarada no mesmo nível de escopo da chamada.
