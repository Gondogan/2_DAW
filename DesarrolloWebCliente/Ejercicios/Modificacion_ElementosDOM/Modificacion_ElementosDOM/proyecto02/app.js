window.addEventListener("DOMContentLoaded", function () {
  const inputRojo = document.getElementById('rojo')
  const inputVerde = document.getElementById('verde')
  const inputAzul = document.getElementById('azul')

  const textoRojo = document.getElementById('texto-rojo')
  const textoVerde = document.getElementById('texto-verde')
  const textoAzul = document.getElementById('texto-azul')

  let rojo = inputRojo.value
  let verde = inputVerde.value
  let azul = inputAzul.value
  
  textoRojo.innerText = rojo
  textoVerde.innerText = verde
  textoAzul.innerText = azul

  inputRojo.addEventListener('input',(e)=>{
    rojo = e.target.value
    textoRojo.innerText = rojo
    const colorRGB = `rgb(${rojo},${verde},${azul})`
    document.body.style.backgroundColor = colorRGB
  })

  inputVerde.addEventListener('input',(e)=>{
    verde = e.target.value
    textoVerde.innerText = verde
    const colorRGB = `rgb(${rojo},${verde},${azul})`
    document.body.style.backgroundColor = colorRGB

  })

  inputAzul.addEventListener('input',(e)=>{
    azul = e.target.value
    textoAzul.innerText = azul
    const colorRGB = `rgb(${rojo},${verde},${azul})`
    document.body.style.backgroundColor = colorRGB

  })

  

})