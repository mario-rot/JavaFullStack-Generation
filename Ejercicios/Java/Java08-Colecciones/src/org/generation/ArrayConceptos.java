package org.generation;

public class ArrayConceptos {
  public static void main(String[] args) {
    /*
     * Los arreglos se definen con corchetes []
     * Los arreglos pueden ir antes o despues de la variable
     * ej. int[] myArray;
     * int myArray[];
     * Para los arreglos se debe asignar la cantidad de datos que contendra
     * Una vez definido, el arreglo no puede cambiar su tamaño.
     */

    // Definimos un arreglo de 3 elementos tipo int.
    int[] codigoColores = new int[4]; // Instanciando un objeto de tipo array, con 4 elementos
    // [0, 0, 0, 0]

    String nombreColores[] = new String[4];

    // Para agregar elementos en un arreglo, se indica dentro del corchete el indice
    nombreColores[0] = "Azul";
    codigoColores[0] = 0x00_00_FF; // RGB 0,0,255
    // Agregar color amarillo
    nombreColores[1] = "Morado";
    codigoColores[1] = 0x80_00_80;
    // Agregar color negro
    nombreColores[2] = "Naranja";
    codigoColores[2] = 0xFF_80_00;

    // Iterar elementos en un arreglo
    // usar for loop

    for (int i = 0; i < nombreColores.length; i++) {
      String texto = String.format("El color %s tiene el codigo RGB 0x%06X", nombreColores[i], codigoColores[i]);
      System.out.println(texto);

    }

    // iterar elementos de un arreglo usando for each loop
    for (String nombreColor : nombreColores) {
      System.out.println("El color " + nombreColor);
    }

    // Agregar un elemento al inidce 5
    // Se crea la excepcion que esta fuera de los limites
    // nombreColores[5] = "amarillo";

    // Inicializar un arreglo {} al asignarlos a la variable.
    String[] frutas = { "Uva", "Fresa", "Manzana" };

    // Instanciar un arreglo bidimensional.
    // Feliz Cumpleaños
    // F C
    String[][] participantes = new String[3][5];

  }
}
