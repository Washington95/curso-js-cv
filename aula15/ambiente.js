let num = [5, 6, 8, 9, 7]
num.push(3)
num.sort()
console.log(num)
console.log(`O vetor tem  ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(10)
if (pos == -1){
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}