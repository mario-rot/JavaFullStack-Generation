package org.generation;

public class OperacionesTest {
  public static void main(String[] args) {
    System.out.println("Java 07 Funciones");

    OperacionesMath operaciones;
    operaciones = new OperacionesMath();

    operaciones.sumaEnterosSinRetorno(35, 5);
    operaciones.sumaEnterosSinRetorno(3, 3);

    System.out.println(operaciones.sumaEnteros(10, 19));
    System.out.println(operaciones.sumaEnteros(5, 4));

    System.out.println(operaciones.sumaFlotantes(6.0, 4.0));
    System.out.println(operaciones.sumaFlotantes(5.01, 4.02));

    System.out.println(operaciones.suma(3.5, 3.4, true));

    System.out.println(operaciones.raizCuadrada(81));
    System.out.println(operaciones.raizCuadrada(81.0));

    // Usar metodo estatico
    // System.out.println(operaciones.valorPi());
    // Los metodos estaticos son de la clase
    // no solamente de los objetos que se cran a partir de ellas
    System.out.println(OperacionesMath.valorPi());

    System.out.println(OperacionesMath.piPorNumero(3));
  }
}
