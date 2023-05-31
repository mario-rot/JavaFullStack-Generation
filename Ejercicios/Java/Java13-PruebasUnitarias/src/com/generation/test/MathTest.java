package com.generation.test;
import com.generation.utils.Math;
import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

public class MathTest {
  Math math = new Math();

  @Test
  @DisplayName("Sumatoria de numeros enteros")
  void sumaTest() {
    assertEquals(9, Math.suma(8, 1), "Suma de 1 unidad");
    assertEquals(54, Math.suma(44, 10), "Suma de decenas");
    assertEquals(1400, Math.suma(800, 600), "Suma de 1 centenas");
    assertEquals(100_000, Math.suma(90_000, 10_000), "Suma de 1 millares");

    assertEquals(-7, Math.suma(8, -15), "Suma de 1 unidad");
    assertEquals(-34, Math.suma(-44, 10), "Suma de decenas");
    assertEquals(200, Math.suma(800, -600), "Suma de centenas");
    assertEquals(-80_000, Math.suma(-90_000, 10_000), "Suma de millares");
  }

  @Test
  @DisplayName("Sumatoria de numeros de punto flotante")
  void sumaDoubleTest() {
    assertEquals(10.02, Math.suma(10.01, 0.01), "Suma de 1 centesima");
    assertEquals(10.04, Math.suma(10.02, 0.02), "Suma de 2 centesimas");
    assertEquals(10.06, Math.suma(10.03, 0.03), "Suma de 3 centesimas");
    assertEquals(10.10, Math.suma(10.05, 0.05), "Suma de 4 centesimas");
    assertEquals(10.08, Math.suma(10.04, 0.04), "Suma de 5 centesimas");
    assertEquals(10.12, Math.suma(10.06, 0.06), "Suma de 6 centesimas");
    assertEquals(10.14, Math.suma(10.07, 0.07), "Suma de 7 centesimas");
    assertEquals(10.16, Math.suma(10.08, 0.08), "Suma de 8 centesimas");
    assertEquals(10.18, Math.suma(10.09, 0.09), "Suma de 9 centesimas");
  }
}
