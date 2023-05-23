package org.generation;

import java.util.ArrayList;

public class ArrayListConceptos {
  public static void main(String[] args) {
    /*
     * Una coleccion List es una coleccion ORDENADA, en la que se permiten elementos
     * duplicados
     *
     * Se basa en un array redimensionable que crece su tamaño,
     * segun crece la coleccion de elementos,
     *
     * Esta coleccion es la que mejor rendimiento tiene.
     *
     * Sintaxis:
     * ArrayList<object> varName;
     */

    // Definir una coleccion de datos numericos.
    int edad = 17;
    // Integer age 17;

    // ArrayList<int> calificaciones; Esto no se puede realizar
    ArrayList<Integer> calificaciones;

    // Defiinir una coleccion de Strings
    ArrayList<String> nombreLibros;
    nombreLibros = new ArrayList<>();

    // Agregar datos al ArrayList con el metodo add()
    // El primer elemento es el indice 0
    nombreLibros.add("Caperucita Roja");
    nombreLibros.add("Harry Potter");
    nombreLibros.add("Hansel y Gretel");
    nombreLibros.add("Libro Vaquero"); // indice 3
    nombreLibros.add("El Hobbit");
    // ArrayList permite elementos duplicados
    nombreLibros.add("Libro Vaquero"); // indice 5

    System.out.println(nombreLibros);

    // Mostrar un elemento en particular
    // Indicamos el numero de indice, usando el metodo get
    System.out.println("David recomienda: " + nombreLibros.get(3));

    // Removemos un elemento de la coleccion
    // indicamos el inice usando el metodo remove()
    System.out.println("Elemento removido: " + nombreLibros.remove(0));

    System.out.println(nombreLibros);

    System.out.println("Esta Harry Potter: " + nombreLibros.contains("Harry Potter"));
    System.out.println("Esta Quiubole con ... : " + nombreLibros.contains("Quiubole con ..."));

    // Iteramos una coleccion ArrayList
    // for loop

    for (int i = 0; i < nombreLibros.size(); i++) {
      System.out.println("Libro: " + nombreLibros.get(i));
    }

    // for each loop
    for (String libro : nombreLibros) {
      System.out.println("Libro a leer: " + libro);
    }

    // for each de la coleccion
    nombreLibros.forEach(libro -> System.out.println(libro));

    // Si se usa el metodo get en un indice existente lo reemplaza
    nombreLibros.set(1, "Clean code");
    System.out.println(nombreLibros);

    // Se pasa la referencia, es necesario usar el metodo clone ()
    // para que sean colecciones independientes
    ArrayList<String> books = nombreLibros;
  }
}
