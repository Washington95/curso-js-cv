function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert ('[ERRO] verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'bebeh.png')
            }else if (idade < 21){
                 //Jovem
                 img.setAttribute('src', 'adoh.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'aduh.png')
            }else{
                //Idoso
                img.setAttribute('src', 'velhoh.png')
            }
        }else {
            gênero = 'Mulher'
            if (idade >=0 && idade <10){
                //Criança
                img.setAttribute('src', 'Sem titulo.png')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'adom.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adum.png')
            }else {
                //Idoso
                img.setAttribute('src', 'velhom.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} ano (s)`
        res.appendChild(img)
    }
}
