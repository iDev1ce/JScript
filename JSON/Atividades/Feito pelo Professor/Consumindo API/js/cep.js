const $cep = document.querySelector("#cep");

const buscarCEP = () => {
    const cep = $cep.value;
    const url = `https://viacep.com.br/ws/${cep}/json`;
    fetch(url)
        .then(res => (res.json()))
        .then(dados => mostrarCep(dados));
    const mostrarCep = (endereco) => {
        document.querySelector("#logradouro").value = endereco.logradouro;
        document.querySelector("#bairro").value = endereco.bairro;
        document.querySelector("#cidade").value = endereco.localidade;
        document.querySelector("#estado").value = endereco.uf;
    }
}

$cep.addEventListener('blur', buscarCEP);


/**************************************************************
 * Postman - Programa para APIs pica
 */