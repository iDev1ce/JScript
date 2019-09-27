/* Criação de um objeto literal */
const alunos = [{ 
    "nome":"juan",
    "idade":18,
    "uf":"SP",
    "salario":600.00
 },
 {
     "nome":"daniel",
     "idade":16,
     "uf":"SP",
     "salario":610.00
 },
 {
    "nome":"guilherme",
    "idade":17,
    "uf":"SP",
    "salario":1210.00
},
{
    "nome":"leonid",
    "idade":22,
    "uf":"AC",
    "salario":10000.00
},
{
    "nome":"marcel",
    "idade":37,
    "uf":"SP",
    "salario":10001.00
},
{
    "nome":"Rogério 437 Linux",
    "idade":50,
    "uf":"SP",
    "salario":10500.00
}]; 

$dados = document.getElementById( "dados" );

const mostrarDados = ( json ) => {


            /* Pode ser feito dessa maneira, porém utilizar o reduce(); é mais eficiente */
                    // let dados = "";
                    // let tamanho = json.length;
                    // for (let i = 0; i < tamanho; i++) {
                    //     dados += `${json[i].nome} - ${json[i].idade} - ${json[i].uf} - ${json[i].salario} <br>` ;
                    // }

                    // return dados;

    /* 
        { 
            "nome":"juan",
            "idade":18,
            "uf":"SP",
            "salario":600.00
        }

        Para receber o nome "Juan", utiliza-se o atributo nome e assim funciona com idade, salario, etc
    */

    //Este código é mais eficiente pois é claro oq ele está fazendo. Pegando os atributos nome e idade e criando um html deles
    criarHtml = (html, aluno) => `${html} ${aluno.nome} - ${aluno.idade} - ${aluno.uf} - ${aluno.salario} <br>`;
    
    return json.reduce(criarHtml, "");
}

//Retorna alunos de SP
const alunoSP = aluno => aluno.uf == "SP";
//Retorna o salario de todos os alunos somados
const somaSalario = (i, aluno) => i + aluno.salario;
//Retorna com aumento o salario de todos os alunos
const aumentaSalario = (aluno) => ({"nome" : aluno.nome, "salario" : aluno.salario + 1000});
//Retorna as informações de um aluno caso seu salário seja menor que 1000
const menorQue1000 = (aluno) => {
    if (aluno.salario < 1000) {
        return ({"nome" : aluno.nome, "salario" : aluno.salario});
    }
}

$dados.innerHTML = "<div>---- ALUNOS ----</div>";
$dados.innerHTML += mostrarDados(alunos);

$dados.innerHTML += "<br><div>---- ALUNOS DE SP ---- </div>";
$dados.innerHTML += mostrarDados(alunos.filter(alunoSP));

$dados.innerHTML += "<br><div>---- SALARIOS ---- </div>";
$dados.innerHTML += "R$" + alunos.reduce(somaSalario, 0);

$dados.innerHTML += "<br><br><div>---- NOVOS SALARIOS ---- </div>";
$dados.innerHTML += mostrarDados(alunos.filter(alunoSP).map(aumentaSalario));

$dados.innerHTML += "<br><div>---- SP QUE GANHAM MENOS DE 1000 ---- </div>";
$dados.innerHTML += mostrarDados(alunos.filter(alunoSP).filter(limitadorSalario));

/* Retorna o tipo de dado de uma variável */
//  typeof(alunos);



/* 
    PODERIA SER FEITO DE MANEIRA FUNCIONAL 
        utilizando: map(), filter(), reduce()
*/