class Aluno{
    constructor(nome, nota){
        this.nome = nome;
        this.nota = nota;
    }
}

joao = new Aluno('João', 7.5)
paulo = new Aluno('Paulo', 5.0)
rodrigo = new Aluno('Rodrigo', 10.0)
marcia = new Aluno('Márcia', 4.5)
lucas = new Aluno('Lucas', 6.0)
jeferson = new Aluno('Rodrigo', 3.5)

alunos = [joao, paulo, rodrigo, marcia, lucas, jeferson]

alunosAprovados = alunos.filter(function(objeto){
    return objeto.nota >= 6;
})

console.log(alunosAprovados)