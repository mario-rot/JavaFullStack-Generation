package com.mundoanimal;

public class Dog extends Canine {

  public Dog(String name) {
    super(name); // hace referencia a la clase Canine
  }

  @Override
  public String showPicture() {
    return "http://" + super.getName() + ".com";
  }

  @Override
  public String eat(String food) {
    return "El perro " + super.getName() + " mueve la colita cuando come " + food;
  }

}
