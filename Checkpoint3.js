const Curso = require("./modulos/curso");
const Aluno = require("./modulos/aluno");

//Informações do CURSO:
console.log('O nome do curso é: ' + Curso.nomeDoCurso)
console.log('A nota precisa ser' + ' ' + Curso.notaDeAprovacao + ' ' + 'ou acima para aprovação')
console.log('O aluno precisa ter menos de ' + Curso.faltasMax + ' ' + 'faltas neste Curso para ser aprovado.')

Curso.adicionaAluno("Maria", 4, [5, 5, 5]);

Curso.listaDeEstudantes.find((Aluno) => {
  return Aluno.nome === "Eduardo"
}).faltas();

Curso.listaDeEstudantes.forEach((Aluno) => {
  console.log('Nome: ' + Aluno.nome);
  console.log('Quantidade de Faltas: ' + Aluno.qtdDeFaltas);
  console.log('As notas são: ' + Aluno.notas);
  console.log('A média de suas notas é: ' + Aluno.calculaMedia());
  console.log('Situação no curso: ' + Curso.aprovado(Aluno) ? "Aprovado" : "Reprovado")
});