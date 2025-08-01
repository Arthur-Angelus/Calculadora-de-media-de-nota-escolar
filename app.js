/******************************************************************************
 * Objetivo: Realizar calculo de médias escolares, trabalhando com entrada de dados, variáveis, e condicionais
 * Autor: Arthur Angelus
 * Data: 01/08/2025
 * Versão: 1.0
 * ****************************************************************************/

/** formas de criar variaveis
 * LET -> permite criar um espaço em memória (variavel), deve-se obrigatoriamente usar apenas dentro de
 *        um bloco (IF, LOOP, function, etc). Essa variavel nasce e morre dentro desse bloco.
 * VAR -> permite criar um espaço em memória (variavel), porém é um método mais antigo do JS, quase não se utiliza 
 *        mais em projetos.
 * CONST -> permite criar um espaço em memória (constante), cujo o conteudo não sofre mudança durante o programa.
 *          podemos criar uma const em qualquer parte do codigo, OBS: recomenda-se que a escrita de uma const seja em
 *          MAIUSCULO.
 * 
 * 
 * formas de conversão de dados
 * String() -> permite converter um objeto ou variável em string
 * Number() -> permite converter um objeto ou variavel em numero (inteiro ou float)
 * parseInt() -> permite converter um objeto ou variavel em inteiro
 * parseFloat() -> permite converter um objeto ou variavel em decimal
 * Boolean() -> permite converter um objeto valor booleano (true/false)
 * Object() -> permite converter uma variavel em objeto (ARRAY, JSON, Classe)
 * 
 * toUpperCase() -. converte uma string para MAIUSCULO
 * toLowerCase() -> converte uma string para minusculo
 * 
 * toFixed() -> permite limitar a qtde de casas decimais
 * 
 * 
 * operadores de compração
 * 
 * == -> validação de igualdade entre conteudos
 * > -> validação de menor valor
 * < -> validação de maior valor
 * >= -> validação de menor valor ou igualdade
 * <= -> validação de maior valor ou igualdade
 * != -> validação de diferença entre conteudos
 * === ->validação de igualdade entre conteudos e igualdade nos tipos de dados
 * !== -> validação de diferença entre conteudos e igualdade nos tipos de dados
 *         (sempre verificar a documentação da linguagem)
 * !=! -> validação de diferença entre conteudos e diferneça nos tipos de dados
 *         (sempre verificar a documentação da linguagem)
 * 
 * operadores logicos
 * E    AND   &&
 * OU   OR    ||
 * Não  NOT   !
 */


//import da biblioteca readline
var readline = require('readline')

//criando um objeto para entrada e saida de dados via terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//entrada de dados do nome do aluno
entradaDeDados.question('Digite o nome do aluno:', function(nome){
    //recebe o call back e converte para MAIUSCULO
    let nomeAluno = String(nome).toUpperCase()

    //entrada de dados da nota1
    entradaDeDados.question('digite a nota1:', function(valor1){
        let nota1 = valor1

        //entrada de dados da nota2
        entradaDeDados.question('digite a nota2:', function(valor2){
            let nota2 = valor2

            //entrada de dados da nota3
            entradaDeDados.question('digite a nota3:', function(valor3){
                let nota3 = valor3

                //entrada de dados da nota4
                entradaDeDados.question('digite a nota4:', function(valor4){
                    let nota4 = valor4
                    
                    if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '' || nome == '' ){
                        console.log('ERRO: Existem campos que não foram preenchidos.')
                    
                    }else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
                        console.log('ERRO: não é possivel calcular com a entrada de letras.')
                    
                    }else if(Number(nota1) < 0 || Number(nota1) > 10 || Number(nota2) < 0 || Number(nota2) > 10 || Number(nota3) < 0 || Number(nota3) > 10 || Number(nota4) < 0 || Number(nota4) > 10){
                        console.log('ERRO: os valores informados precisam ser entre 0 ate 10')
                    
                    }else{
                        let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4
                        let statusAluno
                        
                        if(media < 5){
                            statusAluno = 'REPROVADO'
                        
                        }else if(media < 7 && media >= 5){
                            statusAluno = 'EXAME'
                        
                        }else if(media >= 7 && media <= 10){
                            statusAluno = 'APROVADO'
                        }
                        
                        console.log(`O aluno(a) ${nomeAluno} teve a média: ${media.toFixed(1)} e está: ${statusAluno}`)
                    }

                })//fechamento da nota4
            })//fechamento da nota3
        })//fechamento da nota2
    })//fechamento da nota1
})//fechamento do nome

