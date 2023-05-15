package condicionales;

public class DatosInmutables {
  public static void main(String[] args) {
    // Datos inmutable: No se puede modificar
    int nCuentaBancaria = 678;
    nCuentaBancaria = 999;

    String nombre = "Alex";
    String participante = "Sofi";
    nombre = "Alexis";
//    participante = "Alex";
    participante = new String("Alex");

    // No comparar strings con "==" no compara el contenido del string si no el id que le da al objeto
    // Para comparar el contenido en Strings se debe usar el metodo equals
//    if (participante == "Alex") { <-- Esto NO SE USA para strings
    if (participante.equals("Alex")) {
      System.out.println("Los nombres concuerdan");
    } else System.out.println("Los nombres son diferentes");
  }
}
