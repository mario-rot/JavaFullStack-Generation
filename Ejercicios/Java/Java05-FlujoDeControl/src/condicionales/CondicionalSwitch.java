package condicionales;

import java.util.Scanner;

public class CondicionalSwitch {
  public static void main(String[] args) {

    /*
     * Sintaxis
     * switch (a) {
     * case valor1: expresion;
     * break;
     * case valor2: expresion;
     * break;
     * default: expresion
     * break;
     * }
     *
     * La expresion a evaluar debe de ser de tipo entero, string o enum.
     * La condicional Switch usal el metodo equals para comparar los Strings.
     */

    // -------------------------------------------------------
    // Leer usando la clase Scanner un mes del año (1-12) e indicar
    // el mes en texto.
    // ej: entradas ->"Escribe tu mes de nacimiento: " 12
    // salida -> Naciste en Diciembre

    Scanner monthScan = new Scanner(System.in);
    System.out.println("Escribe tu mes de nacimiento (1-12): ");

    if (monthScan.hasNextInt()) {

      int birthMonth = monthScan.nextInt();

      String monthTxt;
      String seasonTxt;

      switch (birthMonth) {
        case 1:
          monthTxt = "Enero";
          break;
        case 2:
          monthTxt = "Febrero";
          break;
        case 3:
          monthTxt = "Marzo";
          break;
        case 4:
          monthTxt = "Abril";
          break;
        case 5:
          monthTxt = "Mayo";
          break;
        case 6:
          monthTxt = "Junio";
          break;
        case 7:
          monthTxt = "Julio";
          break;
        case 8:
          monthTxt = "Agosto";
          break;
        case 9:
          monthTxt = "Septiembre";
          break;
        case 10:
          monthTxt = "Octubre";
          break;
        case 11:
          monthTxt = "Noviembre";
          break;
        case 12:
          monthTxt = "Diciembre";
          break;
        case 13, 14, 15:
          monthTxt = "Mes no reconocido";
          break;
        default:
          monthTxt = "Mes no reconocido";
          break;
      }

      switch (birthMonth) {
        case 12, 1, 2:
          seasonTxt = "Invierno";
          break;
        case 3, 4, 5:
          seasonTxt = "Primavera";
          break;
        case 6, 7, 8:
          seasonTxt = "Verano";
          break;
        case 9, 10, 11:
          seasonTxt = "Otoño";
          break;
        default:
          seasonTxt = "- No se puede asignar estacion -";
          break;
      }

      if (monthTxt.equals("Mes no reconocido")) {
        System.out.println(monthTxt);
        System.out.println(seasonTxt);
      } else {
        System.out.println("El mes en que naciste es: " + monthTxt);
        System.out.println("La estacion correspondiente es: " + seasonTxt);
      }
    } else {
      System.out.println("- No introdujiste un valor numerico, intenta de neuvo - ");
    }

    // La estacion correspondiente al mes de nacimiento.
    // ej: La estación es invierno.
    // 12, 1, 2 : invierno
    // 3, 4, 5 : primavera
    // 6, 7, 8 : verano
    // 9, 10, 11 : otoño
  }
}
