function adicionar(value){
    document.getElementById("display").value+=value;
}

function calcular(display){
    let expressao=document.getElementById("display").value;
    let resultado=eval(expressao);
    document.getElementById("display").value=resultado;

}

function limpar(){
    document.getElementById("display").value="";
}