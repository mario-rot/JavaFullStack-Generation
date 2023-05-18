package org.generation;

import java.util.Scanner;

public class CicloWhile {
  public static void main(String[] args) {
    /**
     * Ciclo While:
     * Mientras la condicion sea verdadera, se realiza un nuevo ciclo.
     *
     * Sintaxis:
     *
     * while (condicion) instruccion;
     *
     * while (condicion) {
     * instrucciones;
     * }
     *
     */

    // var se puede utilizar para declarar una variable sin
    // declarar el tipo antes del igual
    // var sc = 18; automaticamente es tipo int
    // Esto solo funciona a partir de Java 10
    // Scanner sc = new Scanner(System.in);
    var sc = new Scanner(System.in);

    boolean active = false;

    while (active) {
      System.out.println("Bienvenido Alexis");
      System.out.println("Quieres seguir activo (s/n)?");
      char response = sc.nextLine().toLowerCase().charAt(0);
      if (response != 's')
        active = false; // break;
    }
    // System.out.println("Gracias por tu visita!");
    // sc.close();

    do {
      System.out.println("Bienvenido Patito");
      System.out.println("Quieres seguir activo (s/n)?");
      char response = sc.nextLine().toLowerCase().charAt(0);
      if (response == 's')
        active = true;
      else
        active = false;// break;

    } while (active);

    while (sc.nextLine().toLowerCase().charAt(0) == 's')
      ;
    System.out.println("Adios");
  }
}
