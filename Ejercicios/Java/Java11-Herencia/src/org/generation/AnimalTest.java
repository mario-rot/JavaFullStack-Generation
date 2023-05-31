package org.generation;

import com.mundoanimal.*;
import java.util.*;
import.com.pet.*;

public class AnimalTest {
  public static void main(String[] args) {
    // No se puede instanciar una clase abstracta
    // Animal myAnimal = new Animal();

    // Dog solovino = new Dog("Solovino");
    // Canine solovino = new Dog("Solovino");
    Animal solovino =
        new Dog("Solovino"); // El metodo sobrecargado con los gramos esta solo de Canine para abajo

    System.out.println(solovino.eat("croquetas"));
    // System.out.println(solovino.eat("croquetas", .300));

    if (solovino instanceof Dog)
      System.out.println(
          ((Canine) solovino)
              .eat("croquetas", .300)); // Downcast a Canine cuando de define solovino con Animal

    // Hacer una clase chihuahua, malinois extends Dog
    // sobreescribir bark()
    Animal hercules = new Chihuahua("Hercules");
    System.out.println(((Canine) hercules).makeNoise()); // wau wau wau ... wau wau

    Animal benancio = new Malinois("Benancio");
    System.out.println(((Canine) benancio).makeNoise()); // gauff gauff gauff

    Animal colmillo = new Wolf("Colmillo", "Alfa");
    Animal jacob = new Wolf("Jacob", "Beta");
    System.out.println(colmillo.getName() + ": " + ((Canine) colmillo).makeNoise());
    System.out.println(jacob.getName() + ": " + ((Canine) jacob).makeNoise());

    Pet Kraken new = Chihuahua("Kraken");
    // Pet chiquitin = new Malinois("chiqitin") Aqui no es valido por que Malinois no esta ligado
    // con Pet

    ArrayList<Pet> pets = new ArrayList<>();
    pets.add(kraken);
    pets.add(((Chihuahua) hercules)) pets = new ArrayList<>();

    System.out.println("\n\n ------------------------------------------------------------- \n");

    ArrayList<Animal> shelter = new ArrayList<>();
    shelter.add(solovino);
    shelter.add(hercules);
    shelter.add(benancio);
    shelter.add(colmillo);
    shelter.add(jacob);

    shelter.forEach(animal -> makeNoiseCanine(animal));
    hercules.setName("Kraken");

    System.out.println(((Chihuahua) hercules).trick());
    System.out.println(((Chihuahua) hercules).greeting());
    System.out.println(hercules);

    System.out.println(shelter);
  }

  public static void makeNoiseCanine(Animal canine) {
    if (canine instanceof Canine)
      System.out.println(canine.getName() + " hace el ruido: " + ((Canine) canine).makeNoise());
    else
      System.out.println("Esto no es un canino");
  }
}
