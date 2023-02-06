/******** 
 * Objetivo: Arquivo de funções para realizar calculos matemáticos
 * Data: 03/02/2023
 * Versão: 1.1
*/

/* Forma 1 de se criar uma função em JS
Realizar calculo matemático das 4 operações (SOMAR, SUBTRAIR, MULTIPLICAR e DIVIDIR)
 function calcular(numero1, numero2, tipoCalc) {
};
*/

//Forma 2 de se criar uma função em JS
const calcular = function(numero1, numero2, tipoCalc) {
    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let operação = tipoCalc.toUpperCase();

    let resultado;
    let status = true; // Varievel booleana para identificar o sttaus do calculo
 
    switch (operação) {
        case 'SOMAR':
            resultado = somar(valor1, valor2);
            break;

        case 'SUBTRAIR':
            resultado = subtrair(valor1, valor2);
            break;

        case 'MULTIPLICAR':
            resultado = multiplicar(valor1, valor2);
            break;

        case 'DIVIDIR':
            //Validaçao da divisão por 0
            if (valor2 == 0) {
                console.log('ERRO: Não é possivel fazer uma divisão por 0.');
                //entradaDados.close();
                status = false;
            }
            else
                resultado = dividir(valor1, valor2);
            break
        /*
            Similar ao else finla de uma estrutura baseada em if / else (sse nenhuma das opçoes forem
            verdadeiras, sempre passará pelo default//)
        */
        default:
            console.log('ERRO: A operação informada não é válida. Confira a sua entrada');
                //entradaDados.close(); // fecha o objeto da entrada de dados(encerra o programa)
                status = false;
    } 

    // Validaçao para tratar a variavel resultado quando nenhum calculo é realizado
    if (resultado != undefined)
        return resultado;
    else
        return status;
}

/* Funçao privada, apenas nesse arquivo
-Forma 3 de se criar uma função em JS (modelo arrow fuction)
*/  
const somar       = (valor1, valor2) => Number(valor1) + Number(valor2);
const subtrair    = (valor1, valor2) => Number(valor1) - Number(valor2);
const multiplicar = (valor1, valor2) => Number(valor1) * Number(valor2);
const dividir     = (valor1, valor2) => Number(valor1) / Number(valor2);

// Exporta uma funçao para ser utilizada em outro arquivo
module.exports = {
    calcular
}