package com.pet;

/*
 * Una interfaz es una declaracion formal de un contrato,
 * en la cual los metodos no contienen implementaciones.
 * Es similar a los metodos abstractos.
 *
 * Una clase puede implementar varias interfaces.
 *
 * Las clases son adecuadas para proporcionar funcionalidad
 * a clases que no estan relacionadas entre si.
 *
 * Para patrones de diseño, se suelen utilizar interfaces*/

public interface Pet {

  // Los atricutos en interfaces son de tipo final y static.
  
  boolean PET = true;

  // Los metodos son de tipo public, abstract
  String trick();

  void setOwnerName(String name);

  String getOwnerName();

  // A partir de la V.8 de Java se permite, tener metodos
  // default que tengan una implementacion
  default String greeting(){
    return "Soy una mascota";
  }

}
