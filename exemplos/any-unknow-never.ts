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


if (typeof unknowValor === 'string') {
    stringTest2 = unknowValor;
}

function jogaErro(erro: string, codigo: number): never { //o never é um código que nunca finalizou (loop eterno)
    throw {error: erro, code: codigo}
}

jogaErro('deu erro', 500);