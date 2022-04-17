// import {somar2} from "../MinhasSomasPastaAnterior.js"

// Mesmo que o arquivo .js exportado esteja na mesma pasta do arquivo que está importando,
// é necessário iniciar com "./" senão dá erro.
// Se for na pasta anterior usa-se "../" normalmente
//import { somar1 } from "./MinhasSomas.js";
// Alias para importar todos os membros (funções, propriedades)  exportados de um arquivo js com export:
// repare que o alias é obrigatório .Só " import * from './arquivo.js " ia dar erro
import * as minhasSomas from "./MinhasSomas.js";

// O alias criado é obrigatório para usar o membro :
let s = minhasSomas.somar1(10,10);
console.log("soma * as minhasSomas " + s);

let s2 = minhasSomas.somarMaisCinco(10, 10);
console.log("soma mais cinco " + s2);

// Um alias também pode ser usado individualmente para um membro ( serve para abreviar quando o nome da função for muito grande)
import { admin as ad } from "./user.js";
console.log(`idade ${ad.idade}`)

import { multiplicar1, m5 as m5alt } from "./MinhasMultiplicacoes.js";

console.log(multiplicar1(10, 2));
console.log(`m5 alt ${m5alt(10, 2)} `);



//console.log(admin.nome);
