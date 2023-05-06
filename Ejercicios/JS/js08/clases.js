console.log("Session JS08 - Clases");

// ---- Crear una clase -------
// Para el nombre se usa la notacion Pasca-Case (UpperCamelCase)


class Car {
  // Metodo constructor
  constructor(nameCar, brand, model, price, color) {
    console.log("Has creado un nuevo objeto " + nameCar);
    this.name = nameCar;
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.color = color;
  }
  igniteEngine = (state) => state ? "Engine is on" : "Engine is of";

  // Agregar una funcion que describa las caracteristicas del auto
  describe() {
    console.log(`${this.name} car has the following features:`)
    for (let feat in this) {
      console.log(`${feat}: ${this[feat]}`)
    }
  }

  describe2() {
    const feats = [];
    for (let feat in this) {
      feats.push(`The ${feat} of ${this.name} is ${this[feat]}`)
    }
    return feats
  }
}

// ----- Usar la clase para instanciar (crear) objetos
// para instanciar se usa new NombreClase

const elantra = new Car("Elantra", "Hyundai", "sedan", 500_000, 'blue');
const aveo = new Car("Aveo", "Chevrolet", "sedan", 300_000, 'gray');

console.log(elantra);
console.log(aveo);
console.log(elantra.name + " " + elantra.igniteEngine(true))
console.log('| ----------------------------------------- |')
elantra.describe()
console.log('| ----------------------------------------- |')
console.log(elantra.describe2())
