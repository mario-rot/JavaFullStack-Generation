package condicionales;

import java.util.Scanner;

public class Calificaciones {
  public static void main(String[] args) {

    /**
     * El objetivo del ejercicio es crear un sistema de calificaciones, como sigue:
     * El usuario proporcionará un valor entre 0 y 10 (usando Scanner).
     * Si está entre 9 y 10: imprimir una A
     * Si está entre 8 y menor a 9: imprimir una B
     * Si está entre 7 y menor a 8: imprimir una C
     * Si está entre 6 y menor a 7: imprimir una D
     * Si está entre 0 y menor a 6: imprimir una F
     * Cualquier otro valor debe imprimir: Valor desconocido.
     */
    Scanner gradeScan = new Scanner(System.in);
    System.out.println("Escribe un numero entero entre 1 - 10 (inclusivo): ");

    if (gradeScan.hasNextInt()) {

      int grade = gradeScan.nextInt();

      String gradeTxt;

      switch (grade) {
        case 1, 2, 3, 4, 5:
          gradeTxt = "F";
          break;
        case 6:
          gradeTxt = "D";
          break;
        case 7:
          gradeTxt = "C";
          break;
        case 8:
          gradeTxt = "B";
          break;
        case 9:
          gradeTxt = "A";
          break;
        case 10:
          gradeTxt = "A";
          break;
        default:
          gradeTxt = "Valor desconocido";
          break;
      }

      if (gradeTxt.equals("Mes no reconocido")) {
        System.out.println(gradeTxt);
      } else {
        System.out.println("La calificacion correspondiente es: " + gradeTxt);
      }
    } else {
      System.out.println("- No introdujiste un valor numerico, intenta de nuevo - ");
    }
  }
}
