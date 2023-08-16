/* Ordem de precedência funciona da mesma forma na matemática em comparações a contas, mas contém alguns 
    1. Unário:  !	
    2. Aritmética:	*   /     %	
    3. Aritmética:	-   +	
    4. Comparação:	<   > <=  >=	
    5. Comparação:	==  !=	
    6. Atribuição:	=   +=  -=  *=	
*/

// Exemplo como uma conta ou uma operação pode retornar outro resultado segundo a ordem de precedência.
console.log( (15 * 20) + 10 ) // 310
console.log( 15 * (20 + 10) ) // 450
