function soma(){
    a=4;
    b=6;
    soma=a+b
    console.log(`Resultado da soma: ${soma}`);
}

soma()

//-------------------------------------------------------------------------
function soma(a,b){
    const resultado=a+b;
    return resultado;
}


console.log(soma(10,20));

//-------------------------------------------------------------------------

const calc = (num1, num2, operator) => "Resultado: " + eval(`${num1} ${operator} ${num2}`);

console.log(calc(4, 5, '*'));
