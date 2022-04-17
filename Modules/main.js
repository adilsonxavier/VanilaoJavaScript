// import {somar2} from "../MinhasSomasPastaAnterior.js"

// Mesmo que o arquivo .js exportado esteja na mesma pasta do arquivo que está importando,
// é necessário iniciar com "./" senão dá erro.
// Se for na pasta anterior usa-se "../" normalmente
//import { somar1 } from "./MinhasSomas.js";

//import { somar1, somarMaisCinco }  from "./MinhasSomas.js";
import * as minhasSomas from "./MinhasSomas.js";
//import { admin } from "./user.js";
import * as adminalias from "./user.js";
//import { multiplicar1 } from "./MinhasMultiplicacoes.js";

//let s = somar1(10, 20);
let s = minhasSomas.somar1(10, 20);
console.log("soma da pasta modules " + s);

let s2 = minhasSomas.somarMaisCinco(10, 20);
console.log("soma mais cinco 0229 " + s2);



//console.log("o nome é "+ admin.nome);
console.log("o nome alias é "+adminalias.nome);