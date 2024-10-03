function InscreverAluno() {

    aluno = prompt("Qual seu nome?");
    idadeAluno = prompt("Qual sua idade?");

    let resposta = window.document.getElementById('alunoNome');

    resposta.innerHTML = "<p>" + aluno + " " + idadeAluno + "</p>";
}