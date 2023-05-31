package com.mundoanimal;

public class Malinois extends Dog {

  public Malinois(String name) {
    super(name); // hace referencia a la clase Canine
  }

  @Override
  public String makeNoise() {
    return "guaff guaff guaff";
  }
}
