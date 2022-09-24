
const Aluno = function (nome, qtdFaltas, notas) {
  this.nome = nome,
    this.qtdFaltas = qtdFaltas,
    this.notas = notas,

    this.calculaMedia = function () {
      let soma = 0;

      for (i = 0; i < notas.length; i++) {
        let notaAux = notas[i];
        soma = soma + notaAux;
      }

      return soma / notas.length;
    },

    this.faltas = function () {
      let soma = 0;

      for (i = 0; i < qtdFaltas.length; i++) {
        let comparecimento = qtdFaltas[i];
        soma = soma + comparecimento;
      }

      return soma + qtdFaltas.length;

    };
}
module.exports = Aluno;