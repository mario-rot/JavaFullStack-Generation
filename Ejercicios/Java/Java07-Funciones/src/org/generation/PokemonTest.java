package org.generation;

import java.util.Scanner;

public class PokemonTest {
  public static void main(String[] args) {

    System.out.println("Los Pokemones son: " + Pokemon.nacimiento);

    // Scanner sc = new Scanner(System.in);

    Pokemon pikachu = new Pokemon("Pikachu", 41, 6, "Electricidad estatica");
    Pokemon vamoACalmarnos = new Pokemon("Pikachu de agua", 50, 9, "Torrente");

    // pikachu.nombre = "Pikachu";
    // vamoACalmarnos.nombre = "Pikachu de agua";

    System.out.println(pikachu.nombre);
    System.out.println(vamoACalmarnos.nombre);

    pikachu.saludo();
    vamoACalmarnos.saludo();
  }
}
