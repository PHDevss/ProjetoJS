function carregar() {
    const msg = document.getElementById("msg")
    const img = document.getElementById("imagem")
    const data = new Date()
    const hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#7a6648'    
    } else if (hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#bdbec2'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#44344f'
    }
}