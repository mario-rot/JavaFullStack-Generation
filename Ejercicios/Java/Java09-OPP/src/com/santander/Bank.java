package com.santander;

import java.util.ArrayList;

public class Bank {
  String address;
  int sucursalNumber;
  ArrayList<ATM> ATMs;

  {
    ATMs = new ArrayList<>();
  }

  static int counterBank = 1;

  // Constructor default
  Bank() {
    sucursalNumber = counterBank++;
  }

  Bank(String address) {
    this();
    this.address = address;
  }

  public String getATMS() {
    String text = "";
    for (ATM Atm : ATMs) {
      text += Atm.serialNumber + " $" + Atm.balance + "\n";
    }
    return text;
  }

}
