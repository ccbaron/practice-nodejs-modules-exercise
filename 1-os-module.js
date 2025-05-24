// Leer README

// Import the 'fs' module
const fs = require('fs');
// Import the 'path' module
const path = require('path');
// Import the 'os' module
const os = require('os');

//Nombre del equipo
//Edición/Versión del sistema operativo
//Memoria ram total en GB

console.log('Nombre del equipo: ', os.hostname());
console.log('Edición/Versión del sistema operativo: ', os.release());
console.log('Memoria ram total en GB: ', os.totalmem() / 1024 / 1024 / 1024);

