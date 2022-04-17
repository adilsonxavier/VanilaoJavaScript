 function multiplicar1(n1, n2) {
    return n1 * n2;

}
 function multiplicar1MaisCinco(n1, n2) {
    return (n1 * n2) + 5;

}

// Ao invez de um export na  frente de cada funcao, pode se exportar todas de uma vez:
// Se incluir uma função que não existe é gerado erro
export { multiplicar1, multiplicar1MaisCinco as m5}