function capturar(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML =  numero + num;
}

function limpar(){
    document.getElementById('resultado').innerHTML = '';
}

function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = eval(resultado);
}