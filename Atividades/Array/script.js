const gerarArray = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}


const criarArray = () => {
    const arr = [];
    
    for (let i = 1; i <= 30; i++) {
        arr.push(gerarArray(1,30)); 
    }
    return arr;
}

const ehPar = (valor) => valor % 2 == 0;
const arrPares = (arr) => arr.filter(ehPar);

const elevarQuadrado = (valor) => Math.pow(valor, 2);
const arrQuadrado = (arr) => arr.map( elevarQuadrado );

const ehUnico = ( index, arr ) => {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[index] == arr[i] && index != i) 
            return false;  
    }
    
    return true;
}

const arrUnico = (arr) => arr.filter((valor, index) => ehUnico(index, arr));

const arr = criarArray(1, 20);

document.getElementById("saida_de_numeros").innerHTML = arr.join("<br>");
document.getElementById("saida_de_pares").innerHTML = arrPares(arr).join("<br>");
document.getElementById("saida_de_quadrados").innerHTML = arrQuadrado(arr).join("<br>");
document.getElementById("saida_de_unicos").innerHTML = arrUnico(arr).join("<br>");