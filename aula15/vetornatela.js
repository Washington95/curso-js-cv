let valores = [12, 44, 77, 85, 87, 95, 21, 55, 74]
valores.sort()

// for(let num=0; num < valores.length; num++)
// console.log(`A posição ${num} tem o valor ${valores[num]}`)

for(let num in valores){
    console.log(`A posição ${num} tem o valor ${valores[num]}`)
}