
class Car {
  #brand;
  #price; // Esto es para acerlo privado o no modificable

  constructor(nameCar, brand, model, price, color) {
    console.log("Has creado un nuevo objeto " + nameCar);
    this.name = nameCar;
    this.#brand = brand; // el # es para hacer la propiedad provada o no modificable
    this.model = model;
    this.#price = price;
    // this.price = price;
    this.color = color;
  }
  igniteEngine = (state) => state ? "Engine is on" : "Engine is of";

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

  getDescription() {
    return `${this.name} de ${this.#brand} cuesta ${this.#price}`;
    // return `${this.name} de ${this.#brand} cuesta ${this.price}`;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get brand() {
    return this.#brand;
  }

  get price() {
    return this.#price;
  }
}

class ElectricCar extends Car {
  #numberOfBatteries

  constructor(nameCar, brand, price, numberOfBatteries) {
    super(nameCar, brand, price);
    this.#numberOfBatteries = numberOfBatteries;
  }

  getDescription() {
    return `${super.getDescription()}, tiene ${this.#numberOfBatteries} baterías`;
  }

}

export { Car, ElectricCar };
