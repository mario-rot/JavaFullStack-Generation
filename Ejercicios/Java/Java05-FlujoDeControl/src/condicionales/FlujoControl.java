package condicionales;

import java.util.Scanner;

public class FlujoControl {
  public static void main(String[] args) {
    /*
     * Java 05
     * Sintaxis de la condicional IF
     * Si la condicion es verdadera, se ejecuta la instruccion del if
     *
     * if (condicional) sentenca;
     *
     * ------------------------------------------------
     *
     * if (condicional){
     * sentencias
     * }
     *
     * ------------------------------------------------
     *
     * if (condicional)
     * sentencia;
     * else
     * sentencia_SI_condicional_es_falsa;
     *
     * ------------------------------------------------
     *
     * if (condicional)
     * sentencia;
     * else if (nueva condicional)
     * sentencia;
     * .
     * .
     * .
     * else if (n-condicion)
     * sentencia;
     * else
     * sentencia;
     *
     *
     */

    boolean condicion = true;

    if (condicion)
      System.out.println("La condicion es verdadera");
    else
      System.out.println("La condicion es falsa");

    int edad = 17;

    if (edad >= 18)
      System.out.println("La persona es mayor de edad");
    else
      System.out.println("La persona es menor de edad");

    // -------------------------------------------------------
    /*
     * De una variable tipo int, evaluar si esta
     * en el rango del 1 a10, si es asi desplegar en consola
     * "La seleccion esta en el rango
     * En caso contrario la "La seleccion esta fuera de rango"
     */

    int inRange = -18;
    if (inRange >= 1 && inRange <= 10) {
      System.out.println("La seleccion esta dentro de rango");
    } else {
      System.out.println("La selccion esta fuera de rango");
    }

    // ------------------------------------------------------------
    /*
     * Operador ternario.
     *
     * Sintaxis
     * expresion ? respuesta_si_es_true: si_es_false
     */

    inRange = 7;
    String respuestaTrue = "La seleccion esta dentro de rango";
    String respuestaFalse = "La seleccion esta fuera de rango";
    System.out.println(inRange >= 1 && inRange <= 10 ? respuestaTrue : respuestaFalse);

    inRange = 18;
    String texto = (inRange >= 1 && inRange <= 10) ? "La seleccion esta dentro de rango"
        : "La seleccion esta fuera de rango";
    System.out.println(texto);

    // ---------------------------------------------------------------
    // ----------------------- Clase scanner ------------------------

    Scanner myScan;
    myScan = new Scanner(System.in);
    // Scanner myScan = new Scanner(System.in);
    // System.out.print("Escribe tu nombre: ");
    // String myName = myScan.next(); // leer hasta /n
    // System.out.println("Tu nombre es: " + myName);
    // String myLastName = myScan.next();
    // System.out.println("Tu apellido es: " + myLastName);
    // myScan.nextLine();// consumimos el resto de caracteres (/n) del buffer

    // System.out.print("Escribe tu edad en letras: ");
    // String myAge = myScan.nextLine();
    // System.out.println("Tu edad es: " + myAge);

    // System.out.print("Escribe tu edad: ");
    // String myAgeTxt = myScan.nextLine();
    // int myAge = Integer.parseInt(myAgeTxt);
    // System.out.println("Tu edad es: " + myAge);
    // System.out.println("Pronto cumpliras: " + (myAge + 1));

    System.out.print("Escribe tu edad: ");

    if (myScan.hasNextInt()) {
      int myAgeInt = myScan.nextInt();
      myScan.nextLine(); // Para consumir lo que resta de la linea y no haya problema despues
      System.out.println("Tu edad es: " + myAgeInt);
      System.out.println("Pronto cumpliras: " + (myAgeInt + 1));
    } else {
      System.out.println("- No introdujiste un numero - ");
    }

  }
}
