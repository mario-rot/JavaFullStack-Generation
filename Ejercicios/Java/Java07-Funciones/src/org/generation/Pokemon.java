package org.generation;

public class Pokemon {
  // atributos de instancia (non-static fields)
  String nombre;
  int alturaCm;
  double pesoKg;
  String poder;

  // Atributos de clase (static fields)
  static String nacimiento = "Oviparos";

  // Metodos constructores
  // Debe tener el mismo nombre de mi clase
  // No tienen returno (return)
  Pokemon(String nombrePk, int alturaCmPk, double pesoKgPk, String poderPk) {
    System.out.println("Has creado un pokemon llamado " + nombrePk);
    nombre = nombrePk;
    alturaCm = alturaCmPk;
    pesoKg = pesoKgPk;
    poder = poderPk;
  }

  // Metodos de instancia
  public void saludo() {
    System.out.printf("Hola, soy %s mido %d cm y peso %.2f kg, ademas mi habilidad es: %s %n", nombre, alturaCm,
        pesoKg,
        poder);
  }
  // Metodos de clase
}
