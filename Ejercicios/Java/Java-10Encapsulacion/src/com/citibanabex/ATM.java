package com.citibanabex;

import java.util.ArrayList;
import java.util.Date;
import java.text.SimpleDateFormat;

public class ATM {
  private int serialNumber;
  private double balance;
  private ArrayList<String> log = new ArrayList<>();

  public static int counterATM = 1;

  public ATM() {
    // this.balance = 100_000;
    setBalance(100_000);
    // this.serialNumber = counterATM++;
    setSerialNumber(counterATM++);
  }

  public ATM(double balance) {
    this(); // se invoca al constructor sin parametros
    // this.balance = balance;
    setBalance(balance);
  }

  public ATM(String balance) {
    this.balance = Double.parseDouble(balance);
  }

  // Para acceder a los atributos encapsulados
  // se usan los setters y getters,

  private int setSerialNumber(int serialNumber) {
    return this.serialNumber = serialNumber;
  }

  public int getSerialNumber() {
    return this.serialNumber;
  }

  public double getBalance() {
    return this.balance;
  }

  private double setBalance(double balance) {
    return this.balance = balance;
  }

  public static int getCounterAtm() {
    return counterATM;
  }

  public double deposit(double amount) {
    if (amount > 0) {
      // return this.balance += amount;
      depositLog(amount);
      return setBalance(getBalance() + amount);
    } else {
      return 0;
    }
  }

  public void withdrawal(double amount) {
    if (amount <= 0) {
      // System.out.println("cantidad no valida");
      throw new IllegalArgumentException("Canitdad no debe ser menor a 0");
    } else if (amount > getBalance()) {
      // System.out.println("Fondos insuficientes");
      throw new IllegalStateException("Fondos insuficientes");
    } else {
      withdrawLog(amount);
      // return setBalance(getBalance() - amount);
      setBalance(getBalance() - amount);
    }
    // return getBalance();
  }

  private void withdrawLog(double amount) {
    String ANSI_RESET = "\u001B[0m";
    String ANSI_BLUE = "\u001B[34m";
    StringBuilder strBuilder = new StringBuilder();
    strBuilder.append(ANSI_BLUE);
    strBuilder.append(getDate());
    strBuilder.append(" - Withdraw $ ");
    strBuilder.append(amount);
    strBuilder.append(", Balance: ");
    strBuilder.append(getBalance());
    strBuilder.append("\n");
    strBuilder.append(ANSI_RESET);
    this.log.add(strBuilder.toString());
  }

  private void depositLog(double amount) {
    String ANSI_RESET = "\u001B[0m";
    String ANSI_YELLOW = "\u001B[33m";
    StringBuilder strBuilder = new StringBuilder();
    strBuilder.append(ANSI_YELLOW);
    strBuilder.append(getDate());
    strBuilder.append(" - Deposit $ ");
    strBuilder.append(amount);
    strBuilder.append(", Balance: ");
    strBuilder.append(getBalance());
    strBuilder.append("\n");
    strBuilder.append(ANSI_RESET);
    this.log.add(strBuilder.toString());
  }

  // private void setLog(double amount) {
  // this.log.add(getDate() + " - Withdraw $ " + amount + ", Balance: " +
  // getBalance() + "\n");
  // }

  public String getLog() {
    StringBuilder strBuilder = new StringBuilder();
    for (String event : this.log) {
      strBuilder.append(event);
    }
    return strBuilder.toString();

  }

  public String getLog(int items) {
    StringBuilder strBuilder = new StringBuilder();
    for (int i = this.log.size() - 1; i >= this.log.size() - items; i--) {
      strBuilder.append(this.log.get(i));
    }
    return strBuilder.toString();

  }

  private String getDate() {
    Date date = new Date();
    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy/mm/dd hh:mm:ss");
    return dateFormat.format(date);
  }

  public String displayInfo() {
    // return "Serial number: " + this.serialNumber + " Amount $: " + this.balance;
    StringBuilder strBuilder = new StringBuilder();
    strBuilder.append("Serial Number: ");
    strBuilder.append(this.serialNumber);
    strBuilder.append(", Amount: $");
    strBuilder.append(this.balance);

    return strBuilder.toString();
  }
}
