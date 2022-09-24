

const Aluno = require('./aluno');
const NovosAlunos = require('./estudantes');

let Curso = {
  nomeDoCurso: 'Java_Para_Poucos',
  notaDeAprovacao: 8,
  faltasMax: 1,
  listaDeEstudantes: NovosAlunos,

  adicionaAluno: function (nome, qtdFaltas, notas) {
    this.listaDeEstudantes.push(new Aluno(nome, qtdFaltas, notas))
  },

  aprovado(Aluno) {
    if (Aluno.calculaMedia() >= this.notaDeAprovacao && Aluno.qtdFaltas < this.faltasMax) {
      return true;
    } else if (Aluno.qtdFaltas == this.faltasMax && Aluno.calculaMedia() >= this.notaDeAprovacao * 0.10) {
      return true;
    } return false;
  },

  listaAprovacao() {
    return this.listaDeEstudantes.map(function (Aluno) {
      return this.aprovado(Aluno)
    })
  }

}

module.exports = Curso;