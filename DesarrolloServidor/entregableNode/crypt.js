const bcrypt = require('bcrypt');
const fs = require('fs'); // Módulo nativo para manejar archivos
const readline = require('readline'); // Módulo nativo para leer la consola

// Preparamos la consola para poder escribir y leer
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pedimos la contraseña al usuario
rl.question('Introduce una contraseña para proteger: ', (passwordPlana) => {
    
    // Ciframos la contraseña usando la versión sencilla (Sync)
    const saltRounds = 10;
    const passwordHasheada = bcrypt.hashSync(passwordPlana, saltRounds);
    
    console.log('Tu contraseña original era:', passwordPlana);
    console.log('Tu contraseña protegida es:', passwordHasheada);

    // Preparamos el objeto con la información que queremos guardar
    const datosUsuario = {
        usuario: "Estudiante",
        hashSeguro: passwordHasheada
    };

    // Convertimos nuestro objeto de JavaScript a formato de texto JSON
    const datosEnFormatoJson = JSON.stringify(datosUsuario, null, 2);

    // Guardamos el texto en un archivo físico
    fs.writeFileSync('bd_usuarios.json', datosEnFormatoJson);
    
    console.log('¡Listo! Los datos se han guardado en el archivo bd_usuarios.json');

    // Cerramos la consola para que el programa termine correctamente
    rl.close();
});