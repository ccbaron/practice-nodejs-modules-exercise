const frutas = ["Manzana", "Banana", "Pera", "Naranja", "Uva", "Melón", "Sandía", "Piña", "Kiwi", "Fresa",
    "Cereza", "Ciruela", "Mango", "Limón", "Mandarina", "Granada", "Higo", "Dátil", "Albaricoque", "Melocotón"];

// importa el módulo "utils.js" y usa el método getRandomElementFromArray adecuadamente

const { getRandomElementFromArray } = require('./mis-utilidades/utils.js');
const randomFruit = getRandomElementFromArray(frutas, 3);
console.log(`Fruta aleatoria: ${randomFruit}`);

