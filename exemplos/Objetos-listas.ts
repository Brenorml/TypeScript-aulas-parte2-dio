const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
};

pessoa.idade = 25;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
};

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora'
};

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
};

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
};

interface Estudante extends Pessoa{
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const maria: Pessoa = {
    nome: 'maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática discreta', 'Programação']
};

const monica: Estudante = {
    nome: 'Jessica',
    idade: 28, //Não poderiamos retirar outro item, pois é uma propriedade requerida na interface estudante extendendo a interface Pessoa. Que automaticamente passa a ser requerida para a const monica.
    //profissao: Profissao.Desenvolvedora, - Pode ser retirada pois se tornou opcional ao acrescentar ? na interface pessoa
    materias: ['Matemática discreta', 'Programação']
};

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item)
    }
}

listar(monica.materias);