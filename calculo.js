var númeroDeInscritos = 0;

function InscreverAluno() {

    númeroDeInscritos++;

    aluno = prompt("Qual seu nome?");
    idadeAluno = prompt("Qual sua idade?");

    let resposta = window.document.getElementById('alunoNome');
    let respostaIdade = window.document.getElementById('alunoIdade');


    if(resposta){
        resposta.innerHTML += "<p>" + aluno + "</p>";
        respostaIdade.innerHTML += "<p>" + idadeAluno + "</p>";
    } 
}

function CalcularTimes() {

    let quantidadeDeTimes = parseInt(númeroDeInscritos / 3);
    let resposta2 = window.document.getElementById('respostaTimes');

    if (quantidadeDeTimes) {
        resposta2.innerHTML = "A quantidade de times formados é " + quantidadeDeTimes + ". E nenhuma aluno sobrará.";
        window.document.getElementById('respostaTimes').style.color = 'green';
    } else {
        resposta2.innerHTML = "A quantidade de times formados é " + quantidadeDeTimes + ". E sobrarão alunos.";
        window.document.getElementById('respostaTimes').style.color = 'red';
    }
    
}