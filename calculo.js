function calcular() {
var kg = window.document.getElementById ('kg')
var m = window.document.getElementById ('metros')
var res = window.document.getElementById('result')
var n1 = Number(kg.value)
var n2 = Number(m.value)
var s = n1 / (n2**2)
res.innerText = s

var desc = window.document.getElementById ('descr')
if (s < 18.5){
    desc.innerText = 'Abaixo do peso'
}
else if (s >= 18.5 && s <= 24.9){
    desc.innerText = 'Peso Normal'
    
}
else if (s >= 25.0 && s <= 29.9){
    desc.innerText = 'Excesso de peso'
}
else if (s >= 30 && s <= 34.9){
    desc.innerText = 'Obesidade tipo 1'
}
else if (s >= 35.0 && s <= 39.9){
    desc.innerText = 'Obesidade tipo 2'
}
else if (s >= 40){
    desc.innerText = 'Obesidade tipo 3'
}

}