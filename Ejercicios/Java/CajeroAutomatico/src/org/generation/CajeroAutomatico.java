package org.generation;

import java.util.Scanner;
import java.util.concurrent.TimeUnit;
import java.text.NumberFormat;
import java.util.Date;
import java.text.SimpleDateFormat;

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
   * 2) Hacer depositos <------- Falta!
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
  Double balance = 10_000.00;
  int failedChoices = 0;
  String lastTransaction = "No transactions yet %n%n%n%n";
  boolean open = true;

  CajeroAutomatico() {
    start();
  }

  private void start() {
    clearConsole();
    Scanner sc = new Scanner(System.in);

    printBankFrame("        Welcome! Please introduce your name, then your password (CH26*)");

    System.out.print("Name: ");
    String name = sc.next();
    sc.nextLine();
    System.out.print("Password: ");
    String pass = sc.next();
    sc.nextLine();

    if (name.length() >= 5 && pass.equals("CH26*")) {
      this.clientName = name;
      this.clientPass = pass;
      menu();
    } else {
      clearConsole();
      System.out.println("\n\n\n\n -- The data you have provided is not correct, please try again --");
      wait(3000);
      start();
    }
    sc.close();
  }

  private void menu() {
    clearConsole();

    String menuOptions = "\t Hello " + this.clientName + " %n"
        + "\t Enter the number according to the transaction you want to execute. \n\n"
        + "\n\t\t 1) Cash Withdrawal"
        + "\n\t\t 2) Deposit"
        + "\n\t\t 3) Balance Inquiry"
        + "\n\t\t 4) Complaints"
        + "\n\t\t 5) Last transaction"
        + "\n\t\t 9) Exit ATM";
    printBankFrame(menuOptions);

    Scanner scMenu = new Scanner(System.in);
    System.out.print("Put your selection: ");

    if (scMenu.hasNextInt()) {

      int menuChoice = scMenu.nextInt();
      switch (menuChoice) {
        case 1:
          this.failedChoices = 0;
          cashWithdrawal();
          break;
        case 2:
          this.failedChoices = 0;
          deposit();
          break;
        case 3:
          this.failedChoices = 0;
          checkBalance();
          break;
        case 4:
          this.failedChoices = 0;
          complaints();
          break;
        case 5:
          this.failedChoices = 0;
          checkLastTransaction();
          break;
        case 9:
          System.out.println("Exit");
          exitATM();
          break;
        default:
          if (++this.failedChoices >= 3) {
            clearConsole();
            System.out.printf("\n\n\n\n   Invalid option - %s failed attemps -", this.failedChoices);
            System.out.println("\n  ------------  ATM CLOSED! -----------");
            wait(3000);
            System.exit(1);
          } else {
            clearConsole();
            System.out.printf("\n\n\n\n  Invalid option - %s failed attemps - try again %n", this.failedChoices);
            wait(3000);
            menu();
          }
          break;
      }
    } else {
      if (++this.failedChoices >= 3) {
        // clearConsole();
        System.out.printf("\n\n\n\n   Invalid option - %s failed attemps -", this.failedChoices);
        System.out.println("\n------------  ATM CLOSED! -----------");
        wait(3000);
        System.exit(1);
      } else {
        clearConsole();
        System.out.printf("\n\n\n\n  Invalid option - %s failed attemps - try again %n", this.failedChoices);
        wait(3000);
        menu();
      }
    }
    scMenu.close();
  }

  private void cashWithdrawal() {
    clearConsole();

    String menuOptions = "\t ----------------------  Cash Withdrawal  ---------------------- %n%n"
        + "\t ---> Your current balance is: $" + formatNumber(this.balance) + "%n%n"
        + "\t --> You cannot withdraw more than $6,000\n"
        + "\t --> Only multiples of $50 can be withdrawn \n\n"
        + "\t ----------------  Enter the amount to withdraw  ----------------";
    printBankFrame(menuOptions);
    Scanner scCash = new Scanner(System.in);
    System.out.print("Amount: $");

    if (scCash.hasNextInt()) {
      int amount = scCash.nextInt();
      if (amount > 0 && amount % 50 == 0 && amount <= 6000) {
        if (amount > this.balance) {
          clearConsole();
          printBankFrame("\n\n\nThe amount you are trying to withdraw is greater than your current balance: $" +
              this.balance + ". \n\t Please, choose an amount less than your current balance.\n\n\n");
          wait(4000);
          cashWithdrawal();
        } else {
          donations(scCash);
          clearConsole();
          this.balance -= amount;
          String printBalance = "\n\n\n\n\t\t\t Your remaining balance is: $" + formatNumber(this.balance) + "\n\n\n\n";
          printBankFrame(printBalance);
          wait(4000);
          this.lastTransaction = "Cash Withdrawal: $" + amount + "%n%n";
          menu();
        }
      } else {
        clearConsole();
        System.out.printf("\n\n\n\n\t\t Invalid amount -- Try again \n");
        System.out.printf("  Please specify a positive amount less than 6,000 and multiples of 50 \n");
        wait(3000);
        cashWithdrawal();
      }
    } else {
      clearConsole();
      System.out.printf("\n\n\n\n\t\t Invalid amount -- Try again \n");
      System.out.printf("  Please specify a positive amount less than 6,000 and multiples of 50 \n");
      wait(3000);
      cashWithdrawal();
    }
    scCash.close();
  }

  private void donations(Scanner scCash) {
    clearConsole();
    String printDonation = "\n\t Would you like to donate in support of developers-in-training?"
        + "\n\t\t\t 1) 50"
        + "\n\t\t\t 2) 100"
        + "\n\t\t\t 3) 200"
        + "\n\t\t\t 4) No, I don't want to donate" + "\n";
    printBankFrame(printDonation);
    System.out.print("Put your selection: ");

    if (scCash.hasNextInt()) {

      int menuChoice = scCash.nextInt();
      clearConsole();

      switch (menuChoice) {
        case 1:
          this.balance -= 50;
          printBankFrame("\n\n\n\t\t\t Thank you for that $50.\n\t We are always working to provide"
              + " you with the best experience\n\n\n\n");
          wait(3000);
          break;
        case 2:
          this.balance -= 100;
          printBankFrame("\n\n\n\t\t\t Thank you for that $100.\n\t We are always working to provide"
              + " you with the best experience\n\n\n\n");
          wait(3000);
          break;
        case 3:
          this.balance -= 200;
          printBankFrame("\n\n\n\t\t\t Thank you for that $200.\n\t We are always working to provide"
              + " you with the best experience\n\n\n\n");
          wait(3000);
          break;
        case 4:
          printBankFrame("\n\n\n\t\t\t Okay, we respect your decision.\n    It looks like it will take"
              + " a little longer to fix the complaints section. \n\n\n\n");
          wait(5000);
          break;
        default:
          clearConsole();
          System.out.printf("\n\n\n\n\t\t  Invalid option -- try again %n");
          wait(2000);
          donations(scCash);
          break;
      }
    } else {
      clearConsole();
      System.out.printf("\n\n\n\n\t\t  Invalid option -- try again %n");
      wait(2000);
      scCash.nextLine();
      donations(scCash);
    }
  }

  private void deposit() {
    clearConsole();

    String menuOptions = "\t --------------------------  Deposit  -------------------------- %n%n"
        + "\tEnter the number according to the transaction you want to execute. \n\n"
        + "\n\t\t 1) Deposit to checking account"
        + "\n\t\t 2) Deposit to credit card\n\n";
    printBankFrame(menuOptions);

    Scanner scDep = new Scanner(System.in);
    System.out.print("Put your selection: ");

    if (scDep.hasNextInt()) {
      int selection = scDep.nextInt();
      if (selection == 1) {
        checkingAccountDeposit(scDep);
        wait(2000);
        menu();
      } else if (selection == 2) {
        creditCardDeposit(scDep);
      } else {
        clearConsole();
        System.out.printf("\n\n\n\n\t\t Invalid option -- Try again \n");
        wait(3000);
        deposit();
      }
    } else {
      clearConsole();
      System.out.printf("\n\n\n\n\t\t Invalid option -- Try again \n");
      wait(3000);
      deposit();
    }
    scDep.close();
    menu();
  }

  private void checkingAccountDeposit(Scanner scDep) {
    clearConsole();

    String menuOptions = "\t ----------------  Deposit to Checking Account  ---------------- %n%n"
        + "\t ---> Your current balance is: $" + formatNumber(this.balance) + "%n%n"
        + "\t --> You can only deposit amounts in multiplies of $50 \n\n"
        + "\t ----------------  Enter the amount to deposit  ----------------";
    printBankFrame(menuOptions);

    System.out.print("Amount: $");

    if (scDep.hasNextInt()) {

      int amount = scDep.nextInt();

      if (amount > 0 && amount % 50 == 0) {
        clearConsole();
        this.balance += amount;
        String printBalance = "\n\n\n\n\t\t\t Your new balance is: $" + formatNumber(this.balance) + "\n\n\n\n";
        printBankFrame(printBalance);
        wait(4000);
        this.lastTransaction = "Checking Account Deposit: $" + amount + "%n%n";
        menu();
      } else {
        clearConsole();
        System.out.printf("\n\n\n\n\t\t Invalid amount -- Try again \n");
        System.out.printf("\tPlease enter a positive amount in multiples of 50 \n");
        wait(3000);
        checkingAccountDeposit(scDep);
      }
    } else {
      clearConsole();
      System.out.printf("\n\n\n\n\t\t Invalid amount -- Try again \n");
      System.out.printf("\tPlease enter a positive amount in multiples of 50 \n");
      wait(2000);
      scDep.nextLine();
      checkingAccountDeposit(scDep);
    }
  }

  private void creditCardDeposit(Scanner scDep) {
    clearConsole();

    String menuOptions = "\t ------------------  Deposit to Credit Card  ------------------- %n%n"
        + "\t ---> Your current balance is: $" + formatNumber(this.balance) + "%n%n"
        + "\t --> The quantity can only be specified up to two digits after the decimal point. \n\n"
        + "\t ----------------  Enter the amount to deposit  ----------------";
    printBankFrame(menuOptions);

    System.out.print("Amount: $");

    if (scDep.hasNextDouble()) {
      Double amount = scDep.nextDouble();

      if (amount > 0) {
        clearConsole();
        if (amount > this.balance) {
          clearConsole();
          printBankFrame("\n\n\n\n The amount you are trying to transfer is greater than your current balance: $" +
              this.balance + ". \n\t\t\t Please, choose an amount less than your current balance.\n\n\n");
          wait(4000);
          creditCardDeposit(scDep);
        } else {
          this.balance -= amount;
          String printBalance = "\n\n\n\n\t\t\t  Your new balance is: $" + formatNumber(this.balance)
              + "\n\n\n\n";
          printBankFrame(printBalance);
          wait(4000);
          this.lastTransaction = "Credit Card Deposit: $" + amount + "%n%n";
          menu();
        }
      } else {
        clearConsole();
        System.out.printf("\n\n\n\n\t\t Invalid amount -- Try again \n");
        System.out.printf(" Please enter an amount specified up to two digits after the decimal point \n");
        wait(3000);
        creditCardDeposit(scDep);
      }
    } else {
      clearConsole();
      System.out.printf("\n\n\n\n\t\t Invalid amount -- Try again \n");
      System.out.printf(" Please enter an amount specified up to two digits after the decimal point \n");
      wait(2000);
      scDep.nextLine();
      creditCardDeposit(scDep);
    }
  }

  private void checkBalance() {
    clearConsole();
    String printBalance = "\t  ----------------------  Balance Inquiry  ---------------------- %n%n"
        + "\n\n\t\t\t Your current balance is: $" + formatNumber(this.balance) + "\n\n\n\n";
    printBankFrame(printBalance);
    wait(4000);
    menu();
  }

  private void complaints() {
    clearConsole();
    String print404 = "\t    ----------------------  Complaints  ---------------------- %n%n"
        + "\n\n\t\t    -*-*-*-*-*-*-*-*-  404  -*-*-*-*-*-*-*-\n"
        + "\t\t   -- What on earth are you doing here!? -- \n\n"
        + "\t       -- This section is not available at this time -- \n\n\n\n";
    printBankFrame(print404);
    wait(5000);
    menu();
  }

  private void checkLastTransaction() {
    clearConsole();
    String printLastTransaction = "\t ------------------  Check Last Transaction  ----------------- %n%n"
        + "\n\n\t\t\t    Your last transaction is: \n \t\t" + printDateTime() + " --> "
        + lastTransaction;
    printBankFrame(printLastTransaction);
    wait(5000);
    menu();
  }

  private void exitATM() {
    clearConsole();
    String printGoodBye = "\t    ----------------------  Exit ATM  ---------------------- %n%n"
        + "\n\n\t\t    Thank you for trusting Generation Bank \n\t"
        + "\t     ----------  Come back soon  ----------- \n\n\n"
        + "\t\t     -----------  By: MarioROT  ------------";
    printBankFrame(printGoodBye);
    System.exit(0);
  }

  private static void printBankFrame(String data) {
    System.out.println("| ------------------------------ Generation Bank ------------------------------ |\n");
    System.out.printf(data);
    System.out.println("\n\n| ----------------------------------------------------------------------------- |\n");

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

  public static String formatNumber(double num) {
    return NumberFormat.getNumberInstance().format(num);
  }

  public static String formatNumber(int num) {
    return NumberFormat.getIntegerInstance().format(num);
  }

  public static String printDateTime() {
    Date date = new Date();
    String now = new SimpleDateFormat("yyyy/MM/dd  HH:mm").format(date);
    return now;
  }
}
