window.addEventListener("DOMContentLoaded", function () {

  //CUANDO CARGUE LA PÁGINA TIENE QUE LEGIR UNA CITA ALEATORIAMENTE Y ENSEÑARLA DIRECTAMENTE
  const botonCitas = document.getElementById('boton-cambiar-cita')
  const citaTexto = document.getElementById('cita')
  const citaAutor = document.getElementById('autor')

  botonCitas.addEventListener('click', ()=> {
    let indiceAleatorio = Math.floor(Math.random()* citas.length)
    citaAutor.innerText =`${citas[indiceAleatorio].autor}`
    citaTexto.innerText =`"${citas[indiceAleatorio].texto}"`

  })




})