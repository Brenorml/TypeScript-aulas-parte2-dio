"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
let stringTest = 'verificar';
stringTest = anyEstaDeVolta;
let unknowValor;
unknowValor = 3;
unknowValor = 'opa';
unknowValor = true;
unknowValor = 'vai sim';
let stringTest2 = 'agora vai';
stringTest2 = unknowValor;
if (typeof unknowValor === 'string') {
    stringTest2 = unknowValor;
}
