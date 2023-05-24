package org.generation.test;

import java.io.FileNotFoundException;
import java.io.*;
import java.util.*;

public class ExcepcionesConceptos {
  public static void main(String[] args) {
    /*
     * Una EXCEPCION es una situacion NO ESPERADA
     * durante la ejecucion de un programa.
     *
     * Existen dos tipos de excepciones
     *
     * A) ChackedExceptions: Son excepciones que se heredan de la clase exception.
     * Se tiene que declarar la escepcion en la forma del metodo o bien manejar la
     * excepcion
     * con el bloque try-catch.
     *
     * B) Unchecked Exceptions: Son excepciones que se heredan de la clase
     * RuntimeException.
     * No se esta obligado a procesarlas. Es opcional el uso de try-catch o declarar
     * en la
     * firma del metodo.
     *
     * Las Excepciones de Error, son arrojadas por la JVM, son errores de los que
     * mp se pueden recuperar.
     *
     *
     * Manejo de excepciones con el bloque try-catch
     *
     * Sintaxis:
     *
     * try{
     *
     * } catch (exception) {
     *
     * }
     *
     * try: bloque que contendra sentencias que pudieran generar una excepcion.
     * catch: se ejecutara si ocurre una excepcion en try
     * finally: se ejecutara despues de try o catch.
     *
     * El stacktrace de una excepcion es el conjunto
     * de mensajes desde el origen de la excepcion
     * hasta la ultima clase que recibe la excepcion.
     */

    // Arithmetic exception
    System.out.println("Inicio del programa");
    double division;
    int[] myArray = { 4, 5 };

    try {
      // division = 5 / 0;
      myArray[5] = 10;
      readFile();
    } catch (FileNotFoundException e) {
      e.printStackTrace();
    } catch (ArithmeticException e) {
      e.printStackTrace();
      // } catch (ArrayIndexOutOfBoundsException e){
      // e.printStackTrace();
    } catch (Exception e) {
      e.printStackTrace();
    }
    System.out.println("Fin del programa");
  }

  static void readFile() throws FileNotFoundException {
    File file = new File("myFile.txt");
    Scanner myReader = new Scanner(file);
  }
}
