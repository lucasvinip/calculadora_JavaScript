/******** 
 * Objetivo: Arquivo de funções para realizar calculos matemáticos
 * Data: 03/02/2023
 * Versão: 1.1
*/

//Realizar calculo matemático das 4 operações (SOMAR, SUBTRAIR, MULTIPLICAR e DIVIDIR)
function calcular(numero1, numero2, tipoCalc) {

    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let operação = tipoCalc.toUpperCase();

    let resultado;

    if (operação == 'SOMAR')
        resultado = valor1 + valor2;
    else if (operação == 'SUBTRAIR')
        resultado = valor1 - valor2;
    else if (operação == 'MULTIPLICAR')
        resultado = valor1 * valor2;
    else if (operação == 'DIVIDIR') {
        // Validaçao da divisão por 0
        if (valor2 == 0) {
            console.log('ERRO: Não é possivel fazer uma divisão por 0.');
            entradaDados.close();
        }
        else
            resultado = valor1 / valor2;
    }
    else {
        console.log('ERRO: A operação informada não é válida. Confira a sua entrada');
        entradaDados.close(); // fecha o objeto da entrada de dados(encerra o programa)
    }

    // Validaçao para tratar a variavel resultado quando nenhum calculo é realizado
    if (resultado != undefined)
        return resultado;
    else
        return false;
};


// Exporta uma funçao para ser utilizada em outro arquivo
module.exports = {
    calcular
}