// Sem o export dá o erro Uncaught SyntaxError: import not found: somar1 no arquivo que for importar esta função
 function somar1(n1, n2) {
    return " resulsoma "+ ( n1 + n2);

}

function somarMaisCinco(n1, n2) {
    return n1 + n2 + 5;

}

export { somar1, somarMaisCinco };

export let pessoa = { nome: "adilson", idade: 50 };
