package com.santander;

public class ATM {
  // atributos de instancia (non-static fields)
  String serialNumber; // null
  double balance; // 0.0

  // atributos de clase (static fields)
  static String bankName = "BBVA"; // -Inicializacion
  static int counterATM;
  // Bloque de inicializacion de atributos he instancias
  // Se ejecuta cuando se crea la instancia
  {
    serialNumber = "--------";
    balance = 100_000.00;

  }

  // bloque de inicializacion de atributos de clase
  static {
    bankName = "Santander S.A de C.V"; // 02 Inicializacion
    counterATM = 1;
  }

  // Constructores

  ATM(double balance) {
    this.balance = balance;
    this.serialNumber = Integer.toString(counterATM++);
  }

  ATM(String serialNumber, double balance) {
    // this.serialNumber = serialNumber;
    // this.balance;
    // llamar a otro constructor, se usa this().
    // Tiene que ser la primera linea
    this(balance);
  }

  // Metodos de instancia
  public double getBalance() {
    return balance;
  }

  // Metodos de clase
  public static String getBankName() {
    return "Bank: " + bankName;
  }

  static {
    bankName = "Citibanamex S.A de C.V";
  }
}
