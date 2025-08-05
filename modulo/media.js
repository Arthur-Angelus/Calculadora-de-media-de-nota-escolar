/****************************************************************************
 * Objetivo: arquivo responsavel por calcular e validar medias escolares
 * Autor: Arthur
 * Data: 05/08/25
 * Versão: 1.0
 ***************************************************************************/

//Função para calcular a media de um aluno
function calcularMedia (valor1, valor2, valor3, valor4){
    let nota1 = valor1
    let nota2 = valor2
    let nota3 = valor3
    let nota4 = valor4

    let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4

    return Number(media).toFixed(1)
}

function validarStatus (valor){
    let media = Number(valor)

    let statusAluno
                        
     if(media < 5){
        statusAluno = 'REPROVADO'
                        
     }else if(media < 7 && media >= 5){
        statusAluno = 'EXAME'
                        
     }else if(media >= 7 && media <= 10){
        statusAluno = 'APROVADO'
     }  
     
     if(statusAluno == undefined){
        return false
     }else{
        return statusAluno
     }
}

let media = calcularMedia('8','9','10','8.5')
console.log(media)
console.log(validarStatus(media))
module.exports = {
    calcularMedia,
    validarStatus
}