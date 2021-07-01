// array para armazenar valores
var lista = []

// função para o maior/menor número
function crescente(a, b) {
    return (a - b)
}

function decresc(a, b) {
    return (b - a)
}

/* considere "célula" como um pedaço de código de botão
separado usando funções, visando facilitar a manutenção*/

// célula pro botão Adicionar
var x = function() {
    var res = document.getElementById("resultado")
    var tabela = document.getElementById("tabela")
    var num = document.getElementById("num").value
    var numconv = Number(num)
    lista.push(numconv)
    var item = document.createElement('option')
    item.text = `Valor ${num} adicionado`
    tabela.appendChild(item)
    res.innerHTML = ""
}

// botão Adicionar
function adicionar() {
    var num = document.getElementById("num").value
    var numconv = Number(num)
    if (num.length == 0 || numconv <= 0 || numconv > 100 || numconv == lista) {
        alert("Alerta! Número não autorizado, repetido ou campo vazio")
    }
    else {
        x()
    }
}

// célula pro botão Analisar
var y = function(){
    var res = document.getElementById("resultado")
    var cont = 0
    for (var i = 0; i < lista.length; i++) {
        cont += lista[i]
    }
    var media = cont / lista.length
    res.innerHTML = `<p>Foram colocados ${lista.length} números</p>`
    lista.sort(decresc)
    res.innerHTML += `<p>O maior deles é ${lista[0]}</p>`
    lista.sort(crescente)
    res.innerHTML += `<p>O menor deles é ${lista[0]}`
    res.innerHTML += `<p>A soma entre todos eles é ${cont}</p>`
    res.innerHTML += `<p>A média desses valores é ${media}`
}

// botão Analisar
function analisar() {
    if (lista.length == 0) {
        alert("Não há dados na tabela")
    }
    else {
        y()
    }
}
