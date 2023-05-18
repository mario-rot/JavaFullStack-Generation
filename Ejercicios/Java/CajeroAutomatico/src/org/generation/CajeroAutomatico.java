package org.generation;

import java.util.Scanner;
import java.util.concurrent.TimeUnit;

public class CajeroAutomatico {
  /**
   * Fecha de entrega: Miercoles 24 de mayo, 22 h.
   * Entrega: link de replit
   *
   * Hacer un menu de cajero automatico:
   *
   * condiciones iniciales: $ 10,000.00
   *
   * Opciones del cajero:
   * 1) Retirar dinero
   * - Mostrar la cantidad disponible a retirar
   * - No se puede retirar mas de $6,000.00
   * - Solo se puede retirar en multiplos de $50
   * - Despues de retirar se debe preguntar si desea donar ($200)
   * 2) Hacer depositos
   * Mostrar un menu con las opciones:
   * 1> Cuenta de cheques (sumar al saldo actual)
   * - Solo multiplos de $50
   * 2> Deposito a tarjeta de credito
   * - Restar al salto disponible (actual)
   * - Se puede incluir decimales (2decimales).
   * 3) Consultar saldo
   * - Indicar saldo disponible
   * 4) Quejas
   * - "No disponible por el momento" - regresar a menu principal
   * 5) Ver ultimo movimiento
   * - Mostrar el ultimo movimiento, si realizo un deposito o un retiro
   * - YYYY/MM/DD hh:mm Retiro de $500
   * - YYYY/MM/DD hh:mm Deposito a TC de $300.12
   * 9) Salir del cajero
   * Se despide y se sale del sistema.
   *
   * nota:
   * - Si se pulsa una opcion invalida (ej. 6,7,8)
   * Debe mostrarse: "Opcion invalida, vuelve a inentarlo"
   * - Si se pulsa una opcion invalida por 3 veces, se despide y sale del sistema.
   * - En caso de que no sean consecutivas, se reinicia la cuenta.
   */
  String clientName;
  String clientPass;
  int balance = 10_000;

  CajeroAutomatico() {
    start();
  }

  private void start() {
    clearConsole();
    Scanner sc = new Scanner(System.in);

    printBankFrame("        Welcome! Please introduce your name, then your password (CH26*)%n%n");

    System.out.print("Name: ");
    String name = sc.next();
    sc.nextLine();
    System.out.print("Password: ");
    String pass = sc.next();
    sc.nextLine();

    if (name.length() >= 5 && pass.equals("CH26")) {
      this.clientName = name;
      this.clientPass = pass;
      clearConsole();
      menu();
    } else {
      clearConsole();
      System.out.println("\n\n\n\n -- The data you have provided is not correct, please try again --");
      wait(3000);
      start();
    }
  }

  private void menu() {
    System.out.printf("Hello %s %n", this.clientName);
  }

  private static void printBankFrame(String data) {
    System.out.println("| ------------------------------ Generation Bank ------------------------------ |\n");
    System.out.printf(data);
    System.out.println("| ----------------------------------------------------------------------------- |\n");

  }

  public static void clearConsole() {
    System.out.print("\033[H\033[2J");
    System.out.flush();
  }

  public static void wait(int ms) {
    try {
      Thread.sleep(ms);
    } catch (InterruptedException ex) {
      Thread.currentThread().interrupt();
    }
  }

}
