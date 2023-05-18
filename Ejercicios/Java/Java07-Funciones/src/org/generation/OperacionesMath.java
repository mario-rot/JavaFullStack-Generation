package org.generation;

import java.util.Date;

public class OperacionesMath {

  // Atributos
  // Atributos de instancia (non-static fields)
  // Atriutos de clase (static fields)

  void sumaEnterosSinRetorno(int a, int b) {
    Date date = new Date(); // instanciando un objeto tipo Date
    System.out.printf("%tT %d + %d = %d %n", date, a, b, a + b);
  }

  int sumaEnteros(int a, int b) {
    return a + b;
  }

  double sumaFlotantes(double a, double b) {
    return a + b;
  }

  // Sobrecarga de dos metodos (overload)
  // funciones con el mismo nombre pero con diferentes parametros
  int suma(int a, int b) {
    return a + b;
  }

  int suma(short a, short b) {
    return a + b;
  }

  double suma(double dataA, double dataB) {
    return dataA + dataB;
  }

  double suma(double dataA, double dataB, boolean redondear) {
    if (redondear)
      return Math.round(dataA + dataB);
    return dataA + dataB;
  }

  // esto no es posible, se repiten los parametros.
  // float suma(double dataA, double dataB){
  // return float(a+b);
  // }

  // Sobrecarga de un metodo que realiza la raiz cuadrada de un valor.
  // Un metodo retorna como int, otro metodo retora double

  double raizCuadrada(double a) {
    return Math.pow(a, 0.5);
  }

  /**
   * Obtener la raiz cuadrada de un numero
   * 
   * @param valor a obtener la raiz cuadrada
   * @return raiz cuadrada redondeada
   */

  int raizCuadrada(int a) {
    return (int) Math.round(Math.pow(a, 0.5));
  }

  // MEtodos estaticos (Static Method)
  /*
   * Los metodos estaticos se asocian a la clase en lugar de la
   * instancia. Se pueden invocar sin tener que instanciar un objeto
   *
   * Idenificas un metodo estatico si esta llamado a partir de una clase
   * es decir un nombre que empieza con mayuscula de donde lo llamas.
   *
   * EX: -----> Math.cos(3)
   */

  static double valorPi() {
    return Math.PI;
  }

  static double piPorNumero(int numero) {
    return numero * valorPi();
  }
}
