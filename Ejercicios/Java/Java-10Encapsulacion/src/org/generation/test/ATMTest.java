package org.generation.test;

import com.citibanabex.ATM;

public class ATMTest {
  public static void main(String[] args) {
    System.out.println("Counter ATM: " + ATM.counterATM);

    ATM cajeroA = new ATM(9_000);
    // Al usar el contructor por default, se agregue
    // 100_000 al atributo balance
    ATM cajeroB = new ATM();
    ATM cajeroC = new ATM("777000");

    // System.out.println(cajeroA.serialNumber);
    // System.out.println(cajeroA.balance);
    // System.out.println(cajeroB.serialNumber);
    // System.out.println(cajeroB.balance);
    // System.out.println(cajeroC.serialNumber);
    // System.out.println(cajeroC.balance);

    try {
      cajeroA.deposit(4000);
      cajeroA.deposit(3200);
      cajeroA.deposit(18500);
      System.out.println(cajeroA.displayInfo());
      cajeroA.withdrawal(6000);
      System.out.println(cajeroA.displayInfo());
      cajeroA.withdrawal(200);
      cajeroA.withdrawal(20000);
      System.out.println(cajeroA.displayInfo());

      System.out.println(cajeroA.getLog());

      cajeroA.withdrawal(-3_000);
      cajeroA.withdrawal(300_000);
    } catch (Exception e) {
      e.printStackTrace();
    }

    System.out.println(cajeroA.getLog(2));
  }
}
