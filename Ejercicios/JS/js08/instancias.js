import { Car, ElectricCar } from './clase-auto.js';

console.log("Importar y exportar clases");

const elantra = new Car("Elantra", "Hyundai", "sedan", 500_000, "black")

console.log(elantra.describe());
console.log(elantra.getDescription());
console.log(elantra.name);
console.log(elantra.brand); // undefined

const electricElantra = new ElectricCar("Elantra Electric", "Hyundai", 810_000, 5);
// console.log(electricElantra.describe());
console.log(electricElantra.getDescription())
