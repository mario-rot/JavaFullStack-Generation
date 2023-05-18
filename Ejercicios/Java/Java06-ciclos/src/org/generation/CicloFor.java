package org.generation;

import java.util.Scanner;

public class CicloFor {
  public static void main(String[] args) {
    /**
     * Sintaxis:
     * 
     * for( expresion_inicial ; comparacion; expresion_final) instrucción;
     * 
     * for( expresion_inicial ; comparacion; expresion_final){ instrucciones; }
     * 
     */

    // int j;
    // for (j = 1; j <= 5; ++j)
    // ;
    // System.out.println("Hola " + j); // Hola 6

    // imprimir la tabla de multiplicar del 1 al 3.
    /*
     * 1 * 1 = 1
     * 1 * 10 = 20
     * 2 * 1 = 2
     * 3 * 10 = 30
     *
     * 3: 03 = 6
     * 15: 03 = 9
     * 11: 11 = 4
     */
    // for (int i = 1; i <= 3; i++) {
    // for (int k = 1; k <= 10; k++) {
    // // System.out.println(i + " * " + k + " = " + (i * k));
    // // System.out.printf("Tabla %02d * %02d = %02d %n", i, k, i * k);
    // System.out.printf("Tabla %02d * %02d = 0x%03x %n", i, k, i * k);
    // }
    // }

    int iteraciones = 1;
    for (;;) {
      if (iteraciones > 5)
        break;
      System.out.println("Iteracion: " + iteraciones++);
    }

    // outerLoop:

    // for (int i = 0; i < 5; i++) {
    // for (int j = 0; j < 5; j++) {
    // System.out.println(i + " " + j);
    // if (i == 2 && j == 2)
    // break outerLoop;
    // }
    // }
    // for (int i = 0; i < 5; i++) {
    // for (int j = 0; j < 5; j++) {
    // System.out.println(i + " " + j);
    // if (i == 2 && j == 2)
    // continue outerLoop;
    // }
    // }
    //

    // Imprimir los numeros impares del 1 al 20 (incluyendo)
    // 1, 3, 5, 7, ..., 19
    for (int i = 0; i < 20; i++) {
      if (i % 2 == 0)
        continue;
      System.out.println(i);
    }

  }
}
