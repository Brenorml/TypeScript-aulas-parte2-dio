let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';

let stringTest: string = 'verificar';
stringTest = anyEstaDeVolta;

let unknowValor: unknown;
unknowValor = 3;
unknowValor = 'opa';
unknowValor = true;
unknowValor = 'vai sim';

let stringTest2: string = 'agora vai';
stringTest2 = unknowValor;

if (typeof unknowValor === 'string') {
    stringTest2 = unknowValor;
}