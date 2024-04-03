let randomNumber = parseInt(Math.random()*100+1)
console.log(randomNumber)

//CONSTANTE PARA MANIPULAR OS ELEMENTOS HTML

const submit = document.querySelector('#jogar')
const jogada = document.querySelector('#txtNumero')
const jogadaAnterior = document.querySelector('.vezes')
const jogadasRestantes = document.querySelector ('.numChances')
const recomecar = document.querySelector ('.resultados')
const avisos = document.querySelector ('.avisos')

//CRIANDO UM PARAGRAFO USANDO O JAVASCRIPT

const p = document.createElement ('p')

//CRIANDO UM VETOR PARA RECEBER OS NÚMEROS SORTEADOS
let numerosJogados = []
let minhasJogadas = 1
//VARIÁVEL QUE PERMITE O USUÁRIO JOGAR
let playGame = true 

if (playGame = true){
    submit.addEventListener('click', function(e){
        e.preventDefault()

let tentativa = parseInt(jogada.value) //ARMAZENANDO O CONTEÚDO DA CAIXA DE TEXTO EM UMA VARIÁVEL
    validaChances(tentativa) //FUNÇÃO QUE IRA VALIDAR O CONTEUDO JOGADO    
    })
}

function validaChances(tentativa){
    if(isNaN(tentativa)){
        alert('ATENÇÃO, INFORME UM VALOR NÚMERICO ENTRE 1 E 100')
        jogada.value = '' //LIMPANDO O CONTEUDO DA CAIXINHA DE TEXTO
        jogada.focus()
    }
    else if(tentativa < 1 || tentativa > 100){
        alert('ATENÇÃO, DIGITE UM VALOR ENTRE 1 E 100')
        jogada.value = '' //LIMPANDO O CONTEUDO DA CAIXINHA DE TEXTO
        jogada.focus()
    }

    else{
        numerosJogados.push(tentativa) //EMPURRANDO UM ELEMENTO PARA O VETOR
        if (minhasJogadas === 6 && tentativa !== randomNumber){
            displayTentativas(tentativa) //FUNÇÃO
            msg(`Game Over !! <br> O número correto era ${randomNumber}`)
            fimJogo() //FUNÇÃO
        }

        else{
            displayTentativas(tentativa)
            checarTentativas(tentativa)
        }
    }
}

function checarTentativas(tentativa){
    if(tentativa === randomNumber){
        msg('Parabéns, você acertou o número!')
        fimJogo()
    }

    else if(tentativa < randomNumber){
        msg('palpite baixo, tente novamente!')
    }

    else if(tentativa > randomNumber){
        msg('palpite alto de mais, tente novamente!')
    }
}

function displayTentativas(tentativa){
    jogada.valeu = ''
    jogada.focus()
    jogadaAnterior.innerHTML += `${tentativa}, `
    minhasJogadas++
    jogadasRestantes.innerHTML = `${ 7 - minhasJogadas}`
}

function msg(texto){
    avisos.innerHTML = `<h1>${texto}</h1>`

}

function fimJogo(){
    jogada.value = ''
    jogada.setAttribute('disabled' , '')
    submit.setAttribute('disabled' , '')
    p.classList.add('button') //ADICIONE UM ESTILO PARA O BOTÃO
    p.innerHTML = '<h1 id="iniciarJogada">Iniciar o jogo</h1>'
    recomecar.appendChild(p)
    playGame= false
    iniciarJogo()
}