function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
    //var hora = 19 
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'manha.png'
        document.body.style.background = '#ecbe80'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'tarde2.png'
        document.body.style.background = '#749acf'
    } else {
        // BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#070617'
    }
}
 