==Carpeta Modificaciones del DOM-> Archivo eventos2.js==

Un **evento** en JavaScript es cualquier acción o suceso que ocurre en la página web o en el navegador, del cual el sistema te notifica para que tu código pueda reaccionar a él. Es la pieza fundamental que permite que una página estática se convierta en una aplicación web interactiva.

**4 ELEMENTOS A TENER EN CUENTA:**
- <span style="color:rgb(255, 192, 0)">TARGET</span>: El objetivo como por ejemplo un botón.
- <span style="color:rgb(255, 192, 0)">TRIGGER: </span>Es el desencadenante del evento como puede ser un pulsar el botón.
- <span style="color:rgb(255, 192, 0)">EVENT-HANDLER:</span> La función que disparamos o invocamos a la hora de pulsar el botón.
- <span style="color:rgb(255, 192, 0)">EVENT-LISTENNER:</span> Es la función que esta pendiente del trigger del elemento target y la función de JS del Event-Handler.

---

1º Llamamos a la función Windoww.addEventListener  y lo movemos abajo.
	2º Cuando usamos un evento escucahdor, esta funcion simepre se llama evento (e), normalmente no la usamos pero si la queremos usar, ese elemento tiene que saber si tiene la clase topping.