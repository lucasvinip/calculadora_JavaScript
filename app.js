/*  
    - Objetivo: Realizar calculos matemáticos
    - Data: 03/02/23    
    - Autor: Lucas Vinicius
    - Versão: 1.1
*/

// import de outro arquivo (criado por nos)
var matematica = require('./modulo/calculadora.js');

// Import da biblioteca para entrada de dados
var readline = require('readline');
const { calcular } = require('./modulo/calculadora');

// Cria um objeto para receber os dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Entrada de dados Valor1
entradaDados.question('Valor1: \n', function (numero1) {
    //replace - permite trocar um conteudo da string por outro
    let valor1 = numero1.replace(',', '.');


    //Entrada de dados Valor2
    entradaDados.question('Valor2: \n', function (numero2) {
        let valor2 = numero2.replace(',', '.');


        // Entrada de dados Tipo de calculo
        entradaDados.question('Escolha uma operação: [SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR]: \n'
            , function (tipoCalc) {
                /*
                       -toUpperCase - Converter uma string para MAIUSCULO
                       -toLowerCase - Converter uma string para minusculo
               */
                let operação = tipoCalc.toUpperCase();

                let resultado;

                //Validação de entrada de dados vazio
                if (valor1 == '' || valor2 == '' || operação == '') {
                    console.log('ERRO: Não é possivel calcular sem preencher todos os dados.')
                    entradaDados.close(); // fecha o objeto da entrada de dados(encerra o programa)
                }
                /*
                    Validaçao para verificar se os dados digitados sao numeros
                    Podemos utilizar(IsNaN ou typeof)
                    Se usar o typeof, precisa garantir que o tipo de dados não é generico(string)
                */
                else if (isNaN(valor1) || isNaN(valor2)) {
                    console.log('ERRO: Não é possivel calcular sem a entrada de valors numéricos.')
                    entradaDados.close(); // fecha o objeto da entrada de dados(encerra o programa)
                }
                else {
                    resultado = matematica.calcular(valor1, valor2, operação);
                    if (resultado == false) 
                        entradaDados.close();
                    else {
                        console.log(resultado);
                        entradaDados.close();
                    }
                        ;
                    
                }
            });
    });
});

