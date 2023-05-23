package org.generation;

import java.util.HashMap;

public class HashMapConceptos {
  public static void main(String[] args) {
    /*
     * Una coleccion Map, es una relacion clave(key):valor(value)
     * que forma una tabla de datos
     */

    // Definimos una coleccion HashMap
    // <key, value>
    HashMap<Integer, String> students = new HashMap<>();

    // Agregamos valores a la coleccion, put()
    students.put(12341, "Juan Pablo");
    students.put(78390, "Fatima Moreno");
    students.put(57896, "Andrea Lizet");
    students.put(98992, "Santiago Perez");

    System.out.println(students);

    // Reemplazar un elemento
    students.put(57896, "Sofi G"); // Reemplazamos el elemento
    students.put(11111, "Sofi G"); // Agrefar un elemento duplicado

    System.out.println(students);

    // Mostramos un elemento en particular, usando su key
    System.out.println("Tiene auto supersonico: " + students.get(12341));

    // removiendo un elemento, remove(key)
    System.out.println("Removiendo: " + students.remove(57896));
    System.out.println(students);

    // Iterar la coleccion con sus keys
    for (int matricula : students.keySet()) {
      System.out.println(matricula + " - " + students.get(matricula));
    }

    // Iterar la coleccion con sus values
    for (String student : students.values()) {
      System.out.println("Estudiante: " + student);
    }

    // Iterar con funcion lambda
    students.forEach((key, value) -> System.out.println(key + " - " + value));
  }
}
