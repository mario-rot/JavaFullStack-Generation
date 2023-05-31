package com.generation.utils;

public class Math {
  public static int suma(int a, int b) {
    return a + b;
  }

  public static double suma(double a, double b) {
    return (a*1000 + b*1000)/1000;
  }

  public static boolean isPositive(double value) {
    return value >= 0;
  }
}
