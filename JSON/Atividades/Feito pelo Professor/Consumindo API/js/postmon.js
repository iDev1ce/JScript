const $cep = document.querySelector("#cep");

const buscarCEP = () => {
    const cep = $cep.value;
    const url = `https://api.postmon.com.br/v1/cep/${cep}`;
    fetch(url)
        .then(res => (res.json()))
        .then(dados => mostrarCep(dados));
    const mostrarCep = (endereco) => {
        document.querySelector("#logradouro").value = endereco.logradouro;
        document.querySelector("#bairro").value = endereco.bairro;
        document.querySelector("#cidade").value = endereco.cidade;
        document.querySelector("#estado").value = endereco.estado;
    }
}

$cep.addEventListener('blur', buscarCEP);


/*
 * Insomnia - Programa para APIs pica
 */