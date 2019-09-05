const $img = document.getElementById( "img" );
const $vermelho = document.getElementById( "vermelho" );
const $amarelo = document.getElementById( "amarelo" );
const $verde = document.getElementById( "verde" );
const $automatico = document.getElementById( "automatico" );

let intervalo = 0;

const ligar = ( cor ) => {
    
    clearInterval( intervalo );
    
    switch ( cor ) {            
        case "automatico":
            intervalo = setInterval( automatico, 200 ); break;
            
        default:
            $img.src = `./img/${cor}.png`; 
            clearInterval( intervalo ); break;
    }
}

let i = 0;
const automatico = ( ) => {
    if (i == 0 ) {
        $img.src = `./img/vermelho.png`;
        i = 1;
    } else if (i == 1) {
        $img.src = `./img/amarelo.png`;
        i = 2;
    } else if (i == 2) {
        $img.src = `./img/verde.png`;
        i = 0;
    }
}

$vermelho.addEventListener( "click", () => ligar( "vermelho" ) );
$amarelo.addEventListener( "click", () => ligar( "amarelo" ) );
$verde.addEventListener( "click", () => ligar( "verde" ) );
$automatico.addEventListener( "click", () => ligar( "automatico" ) );