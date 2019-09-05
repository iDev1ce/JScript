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
    let dados = "";
    let tamanho = json.length;
    for (let i = 0; i < tamanho; i++) {
        dados += `${json[i].nome} - ${json[i].idade} - ${json[i].uf} - ${json[i].salario} <br>` ;
    }

    return dados;
}

$dados.innerHTML = mostrarDados( alunos );

console.table(alunos[1]);


/* Retorna o tipo de dado de uma variável */
//  typeof(alunos);