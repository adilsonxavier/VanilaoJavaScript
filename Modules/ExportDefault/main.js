// como operacoes foi definido comp export default no calc.js
// então ele é importado sem {}
// Posso tambem usar um nome do que está no export pior que , como só tem um export mesmo em calc.js , não tem como confundir
import operacoesAlt from "./calc.js";

console.log(operacoesAlt);

let a = operacoesAlt.somaCalc(13, 5);
console.log(a);