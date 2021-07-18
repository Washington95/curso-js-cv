function tabuada() {
    let num = document.getElementById('txnum')
    let tabu = document.getElementById('tab')
    if (num.value.length == 0 ){
        window.alert('Por favor, digite um número !')
    }else {
        let n = Number(num.value)
        let c = 0
        tabu.innerHTML= ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tabu${c}`
            tabu.appendChild(item)
            c++
        }

    }
}