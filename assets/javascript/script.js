//ELEMENTOS DOM
const botao = document.querySelector('#botao')
const inpt = document.querySelector('#inpt-senha')
const botaoConfirmar = document.querySelector('#botao-confirmar')
const li = document.querySelector('.dica1')
const li2 = document.querySelector('.dica2')
const li3 = document.querySelector('.dica3')
const random = Math.floor(Math.random()*500) + 100
const aleatorio = random.toString()

//CONSOLE DO NUMERO ALEATORIO
console.log(`O número aleatorio gerado foi ${aleatorio}`)
  
    //BOTÃO GERAR NUMERO RANDOMICO
    botao.addEventListener('click', e => location.reload())

    //BOTAO DE CONFIRMAR
    botaoConfirmar.addEventListener('click', e =>{
    console.log(inpt.value)
    console.log(`inpt ${inpt.value.substring(1,3)}`)

    //EXCEÇÕES
    if(inpt.value === ''){ return alert( 'Erro o campo encontra-se em branco')}
    if(inpt.value >= 1000){ return alert(`Erro!! O Nº ${inpt.value} contém mais de 3 digitos`)}
    if(inpt.value <= 99){  return alert(`Erro!! 
    *A senha não deve começar com 0
                    ou
    *A senha inserida contém menos de 3 digitos`)}

    //ACERTO
    if(inpt.value === aleatorio){
    alert('PARABÉNS VOCÊ ACERTOU')
    return }
    
    //1 NÚMERO CORRETO
    if(inpt.value[0] === aleatorio[0]
    || inpt.value[0] === aleatorio[1]
    || inpt.value[0] === aleatorio[2]
    || inpt.value[1] === aleatorio[0]
    || inpt.value[1] === aleatorio[1]
    || inpt.value[1] === aleatorio[2]
    || inpt.value[2] === aleatorio[0]
    || inpt.value[2] === aleatorio[1]
    || inpt.value[1] === aleatorio[2]) { li.innerText = 'Um número está correto'}
    else{li.innerText = ' '}

    //1 POSIÇÃO CORRETA
    if(inpt.value[0] === aleatorio[0]
    || inpt.value[1] === aleatorio[1]
    || inpt.value[2] === aleatorio[2]){ li2.innerText = 'A posição de um número da senha está correta'}
    else{
    li2.innerText = ' '
    }
    
    //2 NÚMEROS CORRETOS e 2 POSIÇÕES CORRETAS
    if(inpt.value.substring(0,2) === aleatorio.substring(0,2)
    || inpt.value.substring(1,3) === aleatorio.substring(1,3)
    ) {li.innerText = 'Dois números estão corretos'
        li2.innerText = 'Dois números encontram-se na posição correta'}

    if(inpt.value > aleatorio){
        li3.innerText = 'Arrisque usar um número menor'
    } else{
        li3.innerText = 'Arrisque usar um número maior'
    }

    limparInput()
  
})
    //BOTAO DE CONFIRMAR COM TECLA ENTER
inpt.addEventListener('keypress', e =>{
    if(e.keyCode === 13){
     botaoConfirmar.click()
    }
})
    // FUNÇÃO DE LIMPAR O INPUT
limparInput = () =>{
    inpt.value = ''
    inpt.focus()
}
