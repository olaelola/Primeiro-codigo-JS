function trocarTexto(){
    document.getElementById('paragrafo').innerHTML="Novo texto";
}
function voltar(){
    let texto = "texto original";

    document.getElementById('paragrafo').innerHTML="texto";
}
function soma(x, y){
    let s = x+y;
    alert("Soma: " +s);
}