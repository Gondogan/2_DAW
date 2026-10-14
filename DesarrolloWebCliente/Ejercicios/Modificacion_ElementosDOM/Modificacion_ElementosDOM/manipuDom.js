window.addEventListener("DOMContentLoaded", function () {

  // const contenedor = document.getElementById("contenedor") 
  
  // // Si tenemos elemento con el mismo nombre solo coge el primero
  // // Si queremso que coja todo es getElementsByClassName

  // console.log(contenedor.innerHTML) // Devuelve el HTML del eemento padre

  // const titulo = document.getElementById("titulo") 
  // console.log(titulo.innerText) //Devuelve el texto que tiene dentro
  // console.log(titulo.tagName)  //Etiqueta del elemento

  // const toppings = document.getElementsByClassName("topping")
  // console.log(toppings)
  // console.log(toppings.length)
  // console.log(toppings[0].id)

  // const listas = document.getElementsByTagName("li")
  // console.log(listas)

  // const toppingAceitunas = document.querySelector("#aceitunas")  //

  // const toppingAceitunas2 = document.querySelector(".topping")

  // console.log(toppingAceitunas)
  // console.log(toppingAceitunas2)

  // const primerToppingNaranja = document.querySelector("ul li.fondo-naranja") //Hace una busqueda dentro de un elemento, con otras caracteristicas
  // console.log(primerToppingNaranja)

  // const champis = document.querySelector(".topping.fondo-naranja")
  // console.log(champis)

  // const champis2 = document.querySelector("ul li:not(.fondo-marron)") //Le pones como filtro de busqueda algo que no quiera
  // console.log(champis2)

  // //Coge todos los elementos que compartan en este caso las dos clases y nos devuelve una lista de nodos
  // const toppingsNaranjas = document.querySelectorAll(".topping.fondo-naranja")
  // console.log(toppingsNaranjas)


  //====MODIFICAR EL CSS DESDE JAVASCRIPT

  const primerTopping = document.querySelector(".topping")
  console.dir(primerTopping)  //Muestra todos los atributos del elemento

  //primerTopping.style.backgroundColor = "blue"  //Pisamos el color que tiene ese elemento

  primerTopping.style.color = "#166e3c"

  primerTopping.style.textTransform = "uppercase"

  console.log(primerTopping.style)
  

  const listaToppings =  document.getElementById("lista-toppings")
  console.log(listaToppings.textContent)
  console.log(listaToppings.innerText)
  console.log(listaToppings.innerHTML)

  const titulo = document.getElementById("titulo")
  titulo.innerText = "Mis Toppings Favoritos"

  const enlace = document.getElementsByTagName("a")
  console.log(enlace[0].getAttribute("href"))

  enlace[0].removeAttribute("href")
  enlace[0].setAttribute("href", "https://dominos.com")

  console.log(primerTopping.classList) 

  //Agregamos una nueva clase a ese elemento

  primerTopping.classList.add("fondo-verde")

  console.log(primerTopping.classList.contains("fondo-verde")) //Hace un consulta y responde con booleano, si lo tiene haz esto
  
  const toppingNuevo = document.createElement("li")

  toppingNuevo.classList.add("topping","fondo-marron")

  toppingNuevo.innerText = "Queso Azul"

  listaToppings.append(toppingNuevo)

  //toppingNuevo.remove()

  //listaToppings.remove()

  const toppingNuevo2 = document.createElement("li")

  toppingNuevo2.classList.add("topping","fondo-naranja")

  toppingNuevo2.innerText = "Chorizo"

  listaToppings.appendChild(toppingNuevo2) //Solo deja añadir elementos hijos

  listaToppings.append("🧀") //Tanto para nodos como apra elementos texto o más de uno a diferencia de appendChild

  listaToppings.append(toppingNuevo,toppingNuevo2)

  console.log(listaToppings.parentNode) // Muestra la etiqueta hmtl y todo lo demás como comentarios
  console.log(listaToppings.parentElement) //Nos muestra el elemento padre que sería el div
  console.log(listaToppings.parentElement.parentElement)  //Accedo al abuelo que sería el body
  console.log(listaToppings.firstChild) // Nos va a devolver el espacio de la identacion debajo de la lista 
  console.log(listaToppings.firstElementChild) // Me devuelve el primer elemento como en la parte de abaajo
  console.log(listaToppings.children[0])
  console.log(listaToppings.lastElementChild) //último elemento
  console.log(listaToppings.previousElementSibling) //Nos devuelve el elemento anterior hermano que seria el titulo
  console.log(listaToppings.nextElementSibling) //Nos devuelve el elemento despues hermano que seria el enlace. Y si no hay daría error
  


})