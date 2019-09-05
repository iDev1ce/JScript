const $nome = document.getElementById( 'txt_nome' );
const $media = document.getElementById( 'txt_media' );
const $situacao = document.getElementById( 'txt_situacao' );
const $calcular = document.getElementById( 'txt_calcular' );
const $body = document.getElementById( "body" );

const situacao = ( ) => {
    if ( $media.value <= 5 ) {
        $situacao.value = $nome.value + ", você foi reprovado!";
        $body.style = "background-color: #red";
    } else {
        $situacao.value = $nome.value + ", você foi aprovado!";
        $body.style = "background-color: #green";
    }
}

$calcular.addEventListener( "click", situacao );