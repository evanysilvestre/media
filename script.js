const body = document.querySelector(`body`);
body.style.height = `100vh`;
body.style.width = `100vw`;
body.style.backgroundImage = `url(../assets/backgroud.jpg)`
body.style.backgroundSize = `cover`
body.style.display = `flex`
body.style.justifyContent = `center`
body.style.alignItems = `center`
body.style.overflow = `hidden`

    /*Main - Filha do Body */
    const main = document.createElement(`main`);
    let att = document.createAttribute(`id`);
    att.value = "tela-principal";
    main.setAttributeNode(att);
    main.style.height = `50%`
    main.style.width = `30%`
    main.style.display = `flex`
    main.style.flexDirection = `column`
    body.appendChild(main);

        /*Section - Filha da Main */
        const section = document.createElement(`section`);
        att = document.createAttribute(`id`);
        att.value = "formulario";
        section.setAttributeNode(att);
        section.style.width = `100%`
        section.style.margin = `0 auto`
        section.style.marginBottom = `0.625rem`
        section.style.display = `flex`
        section.style.flexDirection = `column`
        main.appendChild(section);

            /*h1 - Filho da Section */
            const h1 = document.createElement(`h1`);
            h1.textContent = "Calcular Média"
            h1.style.fontSize = `2em`
            h1.style.fontFamily = `Comic Sans MS`
            section.appendChild(h1)

            /*Form - Filho da Section e irmão do h1 */
            const form = document.createElement(`form`)
            att = document.createAttribute(`action`)
            att.value = "#"
            form.setAttributeNode(att)
            att = document.createAttribute(`method`)
            att.value = "POST"
            form.setAttributeNode(att)
            form.style.margin = `-1rem`
            form.style.display = `flex`
            form.style.flexDirection = `column`
            form.style.alignItems = `center`
            section.appendChild(form)

                /*Div Class = form-group[5] - Filhas do Form*/
                for (let i=0; i<6; i++) {
                    const div = document.createElement(`div`);
                    att = document.createAttribute(`class`);
                    att.value = "form-group";
                    div.setAttributeNode(att);
                    div.style.margin = `0.5rem`
                    div.style.fontFamily = `Comic Sans MS`
                    form.appendChild(div)
                }


                    /*2 Label's e 2 Input's - Filhos da primeira e segunda div class="form-group"*/
                    for (let a=0; a<3; a++) {
                        const label = document.createElement(`label`);
                        att = document.createAttribute(`for`);
                        att.value = "nota" + [a+1] ;
                        label.textContent = "Nota " + [a+1] + ":"
                        label.setAttributeNode(att);
                        label.style.margin = `0.5rem`
                        label.style.fontSize = `23px`
                        label.style.fontWeight = `bold`
                        document.getElementsByClassName("form-group")[a].appendChild(label)

                        const input = document.createElement(`input`);
                        att = document.createAttribute(`type`);
                        att.value = "number";
                        input.setAttributeNode(att)
                        att = document.createAttribute(`name`)
                        att.value = "nota" + [a+1]
                        input.setAttributeNode(att)
                        att = document.createAttribute(`id`)
                        att.value = "nota" + [a+1]
                        input.setAttributeNode(att)
                        att = document.createAttribute(`min`)
                        att.value = 0.0
                        input.setAttributeNode(att)
                        att = document.createAttribute(`max`)
                        att.value = 10.0
                        input.setAttributeNode(att)
                        att = document.createAttribute(`step`)
                        att.value = 0.1
                        input.setAttributeNode(att)
                        att = document.createAttribute(`required`)
                        input.setAttributeNode(att)
                        att = document.createAttribute(`onBlur`)
                        att.value = 'validarNumero(this)'
                        input.setAttributeNode(att)
                        input.style.padding = `5px`
                        input.style.textAlign = `center`
                        input.style.borderRadius = `5px`
                        input.style.border = `hidden`
                        input.style.height = `1.5em`
                        input.style.width = `6em`
                        input.style.fontFamily = `Comic Sans MS`
                        document.getElementsByClassName("form-group")[a].appendChild(input)
                        
                    }

                    /*2 Button's - Filhos da terceira div class="form-group*/
                    const button = document.createElement(`button`);
                    att = document.createAttribute(`type`)
                    att.value = (`submit`)
                    button.textContent = "Calcular"
                    button.setAttributeNode(att)
                    att = document.createAttribute(`id`)
                    att.value = (`btnCalcular`)
                    button.setAttributeNode(att)
                    button.style.width = `31%`
                    button.style.height = `2em`
                    button.style.fontSize = `15px`
                    button.style.backgroundColor = `#34e8b6`
                    button.style.color = `white`
                    button.style.border = `hidden`
                    button.style.borderRadius = `5px`
                    button.style.fontFamily = `Comic Sans MS`
                    document.getElementsByClassName("form-group")[3].appendChild(button)

                    button.addEventListener('mouseover', function() {
                        button.style.boxShadow = 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'; 
                        button.style.cursor = 'pointer'; 
                    });
                    
                    button.addEventListener('mouseout', function() {
                        button.style.boxShadow = '';  
                        button.style.cursor = '';
                    });

                    const button2 = document.createElement(`button`);
                    att = document.createAttribute(`type`)
                    att.value = (`reset`)
                    button2.textContent = "Limpar"
                    button2.setAttributeNode(att)
                    att = document.createAttribute(`id`)
                    att.value = (`btnLimpar`)
                    button2.setAttributeNode(att)
                    button2.style.width = `31%`
                    button2.style.height = `2em`
                    button2.style.fontSize = `15px`
                    button2.style.backgroundColor = `#f2603e`
                    button2.style.color = `white`
                    button2.style.border = `hidden`
                    button2.style.borderRadius = `5px`
                    button2.style.fontFamily = `Comic Sans MS`
                    document.getElementsByClassName("form-group")[3].appendChild(button2)

                    /* Função que se assemelha ao :hover*/
                    button2.addEventListener('mouseover', function() {
                        button2.style.boxShadow = 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px';
                        button2.style.cursor = 'pointer'; 
                    });
                    
                    button2.addEventListener('mouseout', function() {
                        button2.style.boxShadow = '';  
                        button2.style.cursor = '';
                    });

                    /*Ajustes na div que contem os button's */
                    document.getElementsByClassName("form-group")[3].style.display = `flex`
                    document.getElementsByClassName("form-group")[3].style.justifyContent = `space-evenly`
                    document.getElementsByClassName("form-group")[3].style.width = `50%`

                    /*1 Label e 1 Input - Filhos da quarta div class="form-group"*/
                    const label2 = document.createElement(`label`)
                    att = document.createAttribute(`for`)
                    att.value = (`media`)
                    label2.textContent = "Média: "
                    label2.style.fontSize = `20px`
                    label2.style.fontWeight = `bold`
                    label2.setAttributeNode(att)
                    document.getElementsByClassName("form-group")[4].appendChild(label2)

                    const inputMedia = document.createElement(`input`)
                    att = document.createAttribute(`type`)
                    att.value = (`number`)
                    inputMedia.setAttributeNode(att)
                    att = document.createAttribute(`name`)
                    att.value = (`media`)
                    inputMedia.setAttributeNode(att)
                    att = document.createAttribute(`id`)
                    att.value = (`media`)
                    inputMedia.setAttributeNode(att)
                    att = document.createAttribute(`value`)
                    att.value = (``)
                    inputMedia.setAttributeNode(att)
                    att = document.createAttribute(`readonly`)
                    inputMedia.setAttributeNode(att)
                    inputMedia.style.padding = `5px`
                    inputMedia.style.textAlign = `center`
                    inputMedia.style.borderRadius = `5px`
                    inputMedia.style.border = `hidden`
                    inputMedia.style.height = `1.5em`
                    inputMedia.style.width = `6em`
                    inputMedia.style.fontFamily = `Comic Sans MS`
                    document.getElementsByClassName("form-group")[4].appendChild(inputMedia)


                     /*Input - Filho da quinta div class="form-group"*/
                    const inputSituacao = document.createElement(`input`)
                    att = document.createAttribute(`type`)
                    att.value = (`text`)
                    inputSituacao.setAttributeNode(att)
                    att = document.createAttribute(`name`)
                    att.value = (`situacao`)
                    inputSituacao.setAttributeNode(att)
                    att = document.createAttribute(`id`)
                    att.value = (`situacao`)
                    inputSituacao.setAttributeNode(att)
                    att = document.createAttribute(`class`)
                    att.value = (`cx`)
                    inputSituacao.setAttributeNode(att)
                    att = document.createAttribute(`placeholder`)
                    att.value = ("Situação Final")
                    inputSituacao.setAttributeNode(att)
                    att = document.createAttribute(`readonly`)
                    inputSituacao.setAttributeNode(att)
                    inputSituacao.style.border = `hidden`
                    inputSituacao.style.textAlign = `center`
                    inputSituacao.style.fontFamily = `Comic Sans MS`
                    document.getElementsByClassName("form-group")[5].appendChild(inputSituacao)
        
                 /*p - Filho da Section e irmão do h1 e do form */
                const p = document.createElement(`p`);
                att = document.createAttribute(`id`)
                att.value = (`aviso`)
                p.setAttributeNode(att)
                section.appendChild(p)

/*-----------------------------------Final da estrutura HTML e CSS-----------------------------------*/

let aviso = document.querySelector('#aviso')
let formulario = document.querySelector('form')

let btnCalcular = document.querySelector('#btnCalcular')
let btnLimpar = document.querySelector('#btnLimpar')

let cxNota1 = document.querySelector('#nota1')
let cxNota2 = document.querySelector('#nota2')
let cxNota3 = document.querySelector('#nota3')
let cxMedia = document.querySelector('#media')
let cxSituacao = document.querySelector('#situacao')

function calcularMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3
}

function situacaoFinal(mediaFinal) {
    let situacaoFinal = ''
    
    if (mediaFinal >= 7) {
        situacaoFinal = 'Aprovado(a)'
    } else if (mediaFinal <= 3) {
        situacaoFinal = 'Reprovado(a)'
    } else {
        situacaoFinal = 'Recuperação'
    }
    return situacaoFinal
}

function formatarSituacao(situacaoFinal) {
    console.log('Situação Final ' + situacaoFinal)
    switch(situacaoFinal) {

        case 'Aprovado(a)':
            cxSituacao.removeAttribute("placeholder")
            cxSituacao.style.backgroundColor = `#34e8b6`
            cxSituacao.textContent = "Aprovado"
            cxSituacao.style.fontFamily = 'Comic Sans Ms'
            cxSituacao.style.color = 'white'
            cxSituacao.style.textAlign = "Center"
            break
        
        case 'Reprovado(a)':
            cxSituacao.removeAttribute("placeholder")
            cxSituacao.style.backgroundColor = `#f2603e`
            cxSituacao.textContent = "Reprovado"
            cxSituacao.style.fontFamily = 'Comic Sans Ms'
            cxSituacao.style.color = 'white'
            cxSituacao.style.textAlign = "Center"
            break
        
        case 'Recuperação':
            cxSituacao.removeAttribute("placeholder")
            cxSituacao.style.backgroundColor = `#e8c0f0`
            cxSituacao.textContent = "Recuperação"
            cxSituacao.style.fontFamily = 'Comic Sans Ms'
            cxSituacao.style.color = 'white'
            cxSituacao.style.textAlign = "Center"
            break

        default:
            console.log('Situação Indefinida')
    } // fim do switch case
}

// VALIDAR E GERAR FLASH MESSAGE
function validarNumero(numero) {
    let num1 = cxNota1.value
    let num2 = cxNota2.value
    let num3 = cxNota3.value
    if(num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10 || num3 < 0 || num3 > 10) {
        formulario.reset() // limpar form
        aviso.textContent = 'Digite uma nota entre 0.0 e 10.0'
        aviso.style.backgroundColor = `#f2603e`
        aviso.style.fontFamily = `Comic Sans MS`
        aviso.style.textAlign = 'center'
        aviso.style.borderRadius = '5px'
        setTimeout(function(){
            aviso.textContent = ''
        }, 2000);
    }
}


// CALCULAR A MEDIA APOS O CLICK NO BOTAO
btnCalcular.addEventListener('click', function(e) {
    console.log('Calcular Média')
// pegar o valor que esta dentro das caixas
// usar metodo parseFloat p converter string p float
    let nota1 = parseFloat(cxNota1.value)
    let nota2 = parseFloat(cxNota2.value)
    let nota3 = parseFloat(cxNota3.value)
    let media = calcularMedia(nota1, nota2, nota3)
    
    console.log(nota1)
    console.log(nota2)
    console.log(nota3)
    console.log(media)

    if(isNaN(media) || media < 0) {
        console.log("Não é um número")
        cxSituacao.textContent = 'Ops... Acho que você digitou algo errado'
        cxSituacao.style.backgroundColor = `#f2603e`
        cxSituacao.style.fontFamily = 'Comic Sans Ms'
        cxSituacao.style.color = 'white'
    } else {
        cxMedia.value = parseFloat(media).toFixed(1)
        cxSituacao.value = situacaoFinal(media)
        formatarSituacao(situacaoFinal(media))
    }
    e.preventDefault()
})

// APOS LIMPAR TIRAR AS CLASS DA CX SITUACAO
btnLimpar.addEventListener('click', function() {
    att = document.createAttribute(`placeholder`)
    att.value = ("Situação Final")
    cxSituacao.setAttributeNode(att)
    cxSituacao.style.backgroundColor = ``
    cxSituacao.textContent = ""
    cxSituacao.style.fontFamily = 'Comic Sans MS'
    cxSituacao.style.color = ''
    cxSituacao.style.textAlign = "center"
})