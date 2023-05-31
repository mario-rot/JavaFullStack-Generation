package org.generation;

class Iteration {
  private String name;

  Iteration(String name) {
    this.name = name;
  }
  public void numberOfIterations(int number) {
    for (int i = 0; i < number; i++) {
      System.out.println("Obj: " + this.name + ", Iteration: " + i);
    }
  }
}

class MyThread extends Thread {
  public MyThread(String name) {
    super(name);
  }
  /*
   * Metodo que sera concurrente
   * */
  @Override
  public void run() {
    for (int i = 0; i < 5; i++) {
      try {
        Thread.sleep(1000);
      } catch (InterruptedException e) {
        e.printStackTrace();
      }
      System.out.println(
          "IDThread: " + super.getId() + " Obj: " + super.getName() + ", Iteration: " + i);
    }
  }
}

public class ThreadWithExtend {
  public static void main(String[] args) {
    Iteration it01 = new Iteration("it01");
    Iteration it02 = new Iteration("it02");
    Iteration it03 = new Iteration("it03");

    it01.numberOfIterations(5);
    it02.numberOfIterations(5);
    it03.numberOfIterations(5);

    // -- ---- Realizar concurrencia
    // Realizar multiples tareas somultaneas
    MyThread hilo01 = new MyThread("hilo01");
    MyThread hilo02 = new MyThread("hilo02");
    MyThread hilo03 = new MyThread("hilo02");

    hilo01.start();
    hilo02.start();
    hilo03.start();
  }
}
