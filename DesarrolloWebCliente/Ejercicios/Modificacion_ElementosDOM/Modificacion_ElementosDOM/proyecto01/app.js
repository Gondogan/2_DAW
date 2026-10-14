

window.addEventListener("DOMContentLoaded", function () {
  
  //CAPTURAMOS LOS ELEMENTOS DEL DOM
  const boton = document.querySelector('button')
  const color = document.getElementById('color')

  function generarColorHexAleatorio(){
    const digitos = '0123456789ABCDEF'
    let colorHex = '#'

    for(let i=0; i<6; i++){
      let indidceAleatorio = Math.floor(Math.random()* 16)
      colorHex += digitos[indidceAleatorio]
    }
    
    return colorHex;
  }
  
   boton.addEventListener('click', ()=> {
    let colorAleatorio = generarColorHexAleatorio();
    color.textContent = colorAleatorio
    document.body.style.backgroundColor = colorAleatorio
    

   })

})