package org.generation;

import java.util.HashSet;

public class HashSetConceptos {
  public static void main(String[] args) {
    /*
     * Una coleccion de tipo SET es una coleccion NO ORDENADA
     * No se permiten elementos duplicados
     * Cualquier elemento dupllicado no se insertara en la coleccion.
     *
     * Sintaxis:
     * HashSet<Object> varName;
     */

    // Defiimos una coleccion HashSet
    HashSet<String> paises = new HashSet<>();

    // Agregar valores con add()
    paises.add("Mexico");
    paises.add("Alemania");
    paises.add("Genovia");
    paises.add("Wakanda");

    System.out.println(paises);
    paises.add("Genovia");// agregando duplicado
    System.out.println(paises);

    // Desplegamos el tamaño de la coleccion, size()
    System.out.println("Elementos: " + paises.size());

    // Cerificando si existe un elemento
    System.out.println("Existe USA: " + paises.contains("USA"));
    System.out.println("Existe Alemania: " + paises.contains("Alemania"));

    // removemos un elemnto, remove()
    System.out.println("Eliminamos: " + paises.remove("Mexico"));
    System.out.println(paises);

    // Iteramos la coleccion
    // for each loop
    for (String pais : paises)
      System.out.println(pais);

    // usando Lambda expressions
    paises.forEach(pais -> System.out.println("->" + pais));

  }
}
