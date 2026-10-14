// Importamos 'bcrypt', un paquete externo para cifrar contraseñas de forma muy segura.
const bcrypt = require('bcrypt');

// Importamos 'fs' (File System), un módulo nativo de Node para interactuar con los archivos del ordenador.
const fs = require('fs');

// Importamos 'readline', un módulo nativo de Node para leer lo que el usuario escribe en la consola.
const readline = require('readline');

// El método readline.createInterface() configura por dónde entran y salen los datos en la terminal.
// - process.stdin: Le dice al programa que escuche el teclado (entrada estándar).
// - process.stdout: Le dice al programa que muestre texto en la pantalla (salida estándar).
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// El método rl.question() muestra el texto en la consola y se queda esperando a que el usuario teclee algo.
// Cuando el usuario pulsa Enter, lo que ha escrito se guarda en la variable 'passwordPlana'.
rl.question('Introduce una contraseña para proteger: ', (passwordPlana) => {
    
    // Definimos las rondas de 'sal' (salt). El valor 10 hace que el algoritmo tarde un tiempo 
    // calculado para dificultar enormemente los ataques por fuerza bruta de los hackers.
    const saltRounds = 10;
    
    // El método bcrypt.hashSync() cifra la contraseña aplicando el algoritmo. 
    // Al ser "Sync" (Síncrono), bloquea la ejecución en esta línea hasta que termina de cifrarla.
    const passwordHasheada = bcrypt.hashSync(passwordPlana, saltRounds);
    
    // Imprimimos ambas contraseñas para comprobar el resultado del cifrado.
    console.log('Tu contraseña original era:', passwordPlana);
    console.log('Tu contraseña protegida es:', passwordHasheada);

    // Creamos un objeto normal de JavaScript para estructurar los datos del usuario.
    const datosUsuario = {
        usuario: "Estudiante",
        hashSeguro: passwordHasheada
    };

    // El método JSON.stringify() convierte nuestro objeto de JavaScript a una cadena de texto formato JSON.
    // Los parámetros 'null' y '2' sirven para darle formato visual, añadiendo saltos de línea
    // y espacios para que sea muy fácil de leer si abrimos el archivo resultante.
    const datosEnFormatoJson = JSON.stringify(datosUsuario, null, 2);

    // El método fs.writeFileSync() crea o sobrescribe un archivo en el disco duro de forma síncrona.
    // Recibe dos parámetros: el nombre del archivo ('bd_usuarios.json') y lo que queremos escribir dentro.
    fs.writeFileSync('bd_usuarios.json', datosEnFormatoJson);
    
    console.log('¡Listo! Los datos se han guardado en el archivo bd_usuarios.json');

    // El método rl.close() termina la conexión con la consola. 
    // Es obligatorio llamarlo; si no lo hacemos, el programa se quedaría esperando infinitamente.
    rl.close();
});