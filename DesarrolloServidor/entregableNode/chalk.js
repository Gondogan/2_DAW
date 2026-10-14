import chalk from 'chalk';

// Mensaje informativo en azul
console.log(chalk.blue('Iniciando el sistema de la aplicación...'));

// Mensaje de éxito en verde y negrita
console.log(chalk.green.bold('¡Usuario registrado correctamente!'));

// Podemos combinar estilos, por ejemplo, texto negro con fondo cian
console.log(chalk.bgCyan.black(' Entrenador asignado a: Totodile '));

// Mensaje de error o alerta en rojo
console.log(chalk.red('Cerrando el programa por seguridad.')); 
