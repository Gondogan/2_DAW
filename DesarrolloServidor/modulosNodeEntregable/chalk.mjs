// Importamos el paquete 'chalk' utilizando la sintaxis moderna de ES Modules.
// Este paquete sirve para dar color y estilo a los textos que imprimimos en la terminal.
import chalk from 'chalk';

// El método chalk.blue() pinta el texto de azul.
// Luego, console.log() lo muestra en la terminal. Útil para indicar que un proceso arranca.
console.log(chalk.blue('Iniciando el sistema de la aplicación...'));

// Podemos encadenar métodos poniendo un punto entre ellos.
// chalk.green pinta de verde y .bold lo pone en negrita. Ideal para mensajes de éxito.
console.log(chalk.green.bold('¡Usuario registrado correctamente!'));

// También podemos cambiar el color de fondo.
// bgCyan pone el fondo color cian (celeste) y .black pone el texto negro para que resalte.
console.log(chalk.bgCyan.black(' Entrenador asignado a: Totodile '));

// El método chalk.red() pinta el texto de rojo.
// Es el estándar para mostrar errores o alertas de seguridad en la consola.
console.log(chalk.red('Cerrando el programa por seguridad.'));