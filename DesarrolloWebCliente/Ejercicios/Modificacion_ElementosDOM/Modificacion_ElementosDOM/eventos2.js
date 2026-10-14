function capturarElemento(){
  const listaToppings = document.querySelector('#lista-toppings')
  console.log(listaToppings)
  agregarEventosLista(listaToppings)
  
}

function agregarEventosLista(lista){  //Vamos a agregar eventos a una lista
    lista.addEventListener('click', (evento)=> {
          mostrarTopping(evento.target)
    })

}

function mostrarTopping(topping){
  alert("El topping seleccionado es: "+ topping.textContent)
}


window.addEventListener("DOMContentLoaded", function () {
  capturarElemento()





});