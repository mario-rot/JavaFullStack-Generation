package org.generation;

public class Variables {
  public static void main(String[] args) {
    /*
     * Reglas para el nombre de las variables
     * - Se distingue entre minusculas y mayusculas
     * - La longitud del nombre es ilimitada
     * - Puedes utilizar cualquier caracter unicode
     * - La variable puede comenzar:
     * > una letra ej. miVariable
     * > signo de dolar $miVariable
     * > caracter de subrayado _miVariable
     */

    int $myVar; // es valido pero no se recomienda
    int _myVar; // es valido, pero no se recomienda
    // int #myVar; //no es valido
    int myVarEspañol; // es valido, pero no se recomienda de preferencia nombres en ingles
    // int 5mentarios; // No es valido, no se puede comenzar con un numero
    int sinC0m3nt4r10s; // es valido

    /*
     * En Java tendremos los siguientes tipos de variables
     * Variables de instancia (Non static flieds): atributos de los objetos
     * Variables de clase (static Fields): atributos de la clase
     * Variables locales (local variables): variables dentro de las funciones o
     * metodos
     * Parametros (parameters): entrada de las funciones
     */

    /*
     * Tipos de datos en Java
     * - Objetos
     * - Datos primitivos (8):
     * > byte
     * > short
     * > int
     * > long
     * > float
     * > double
     * > boolean
     * > char
     */

    // el tipo byte es de 8 bits, almacena datos numericos enteros
    byte myVarByte = 12;
    System.out.println("byte " + myVarByte);
    // 2^8 = 256
    // Obtener el valor maximo y minimo del tipo byte, usando su
    // wrapper (Clase envolvente) Byte.
    System.out.println("Byte, Max value: " + Byte.MAX_VALUE);
    System.out.println("Byte, Min value: " + Byte.MIN_VALUE);

    // El tipo short es de 16 bits, almacena datos numericos enteros.
    // 2^16 = 65536
    short myVarShort = 500;
    System.out.println("short " + myVarShort);
    System.out.println("Short, Max value: " + Short.MAX_VALUE);
    System.out.println("Short, Min value: " + Short.MIN_VALUE);

    // El tipo int es de 32 bits, almacena datos numericos enteros.
    // 2^32 = 2147483647
    short myVarInt = 1000;
    System.out.println("int " + myVarInt);
    System.out.println("Int, Max value: " + Integer.MAX_VALUE);
    System.out.println("Int, Min value: " + Integer.MIN_VALUE);

    // El tipo long es de 64 bits, almacena datos numericos enteros.
    // 2^64 = 18446744073709551616
    short myVarLong = 1500;
    System.out.println("long " + myVarLong);
    System.out.println("Long, Max value: " + Long.MAX_VALUE);
    System.out.println("Long, Min value: " + Long.MIN_VALUE);

    // ---------------------------------------------------
    // El tipo float es de 32 bits, almacena datos numericos de punto flotante
    // (real).
    float myVarFloat = 1500.6523F;
    System.out.println("float " + myVarFloat);
    System.out.println("Float, Max value: " + Float.MAX_VALUE);
    System.out.println("Float, Min value: " + Float.MIN_VALUE);

    // Las literales numericas son de tipo int.
    // Las literales numericas de punto flotante son de tipo double
    // Para indicar una literal numerica de tipo long hay que indicar
    // la literal con la letra L, mayuscula de preferencia
    long myLiteralLong = 2147483648L;

    // Para inidicar una literal numerica de tipo float, hay que indicar
    // la literal con la letra F, mayuscula de preferencia

    // El tipo double es de 64 bits, almacena datos numericos de punto flotante
    // (real).
    float myVarDouble = 1500.6523F;
    System.out.println("double " + myVarDouble);
    System.out.println("Double, Max value: " + Double.MAX_VALUE);
    System.out.println("Double, Min value: " + Double.MIN_VALUE);

    // -----------------------------------------------------------
    // El tipo boolean solo almacena valores true o false
    boolean myVarBoolean = true;

    // El tipo char solo almaena un caracter, se debe definir la literal
    // entre apostrofes ej. 'a'. Solo almacena caracteres de la tabla unicode (16
    // bits)
    // puede almacenar del 0 al 65535.

    char losPandillerosDeLaTarde = 'I';
    System.out.println("char: " + losPandillerosDeLaTarde);

    // Podemos definir un char por su codigo unicode o su valor numerico
    char letraL = '\u004C'; // L
    System.out.println("La letra L: " + letraL);
    char letraM = 77;
    System.out.println("La letra M: " + letraM);

    // -------------------------------------------------------------
    // Formas de representar un numero
    // Representacion decimal
    System.out.println("Representacion decimal: " + 26);
    // Representacion binaria
    System.out.println("Representacion binaria: " + 0b11010);
    // Representacion hexadecimal
    System.out.println("Representacion hexadecimal " + 0x1a);

    // Para las literales numericas se puede usar el guion bajo _ para separar
    // numeros
    // No se puede escribir _ al inicio o final de la literal
    // No se puede escribir _ junto a un punto decimal
    // No se puede escribir _ antes de la F o L
    int numerosSeparados = 12_345;
    float numerosFloatSeparados = 12_345.456_346F;

    // --------------------------------------------------------------
    // Conversion de tipos de datos
    byte conquita600ml = 60;
    // upcasting
    short coquita2000ml = conquita600ml;
    // downcasting
    short pozoleGrande1L = 130;
    byte pozoleBurbuja = (byte) pozoleGrande1L;
    System.out.println("Pozole burbuja: " + pozoleBurbuja);

    // ------------------------------------------------------------
    // Objetos de tipo string.
    // Se definen entre comillas dobles
    // Si deseas imprimir comillas dobles en el mensaje, se usa el caracter de
    // escape \
    // \b (backspace), \t (tab), \n (line feed), \f (form feed), \r (carriage
    // return),
    // \" (double quote), \' (single quote), and \\ (backslash).
    String myVarString = "Holi \"Crayoli\"";
    System.out.println("Mensaje string: " + myVarString);

    // Convertir string a numeros
    byte edadMascota = Byte.parseByte("10");
    double edadPlaneta = Double.parseDouble("456.8956");
    System.out.println(edadMascota + "  " + edadPlaneta);
    // Convertir numeros a String
    String edadString = String.valueOf(4568);
    // obteniendo la longitud de un string
    System.out.println("El numero de digitos de edad string = " + edadString.length());
    // Obteniendo el primer caracter de
    System.out.println("El primer caracter de " + edadString + " es: " + edadString.charAt(0));
    System.out.println("El segundo caracter de " + edadString + " es: " + edadString.charAt(1));

    // ---------------------------------------------------------------
    // Operadores numericos
    int opA = (int) 5.2;
    int opB = 20;
    int suma = opA + opB;
    int resta = opA - opB;
    int multiplica = (int) (opA * opB * 1.01);
    double multiplicadouble = opA * opB * 1.01;
    int division = opA / opB;
    double divisionDouble = (double) opA / opB;
    double residuo = 5 % 2;

    System.out.println(suma);
    System.out.println(resta);
    System.out.println(multiplica);
    System.out.println(multiplicadouble);
    System.out.println((0.1 * 1000 + 0.2 * 1000) / 1000);
    System.out.println(division);
    System.out.println(divisionDouble);
    System.out.println("Residuo de 5%2 = " + residuo);

    int valorInicial = 10;
    System.out.println("Preincremento " + ++valorInicial);
    System.out.println("Postincremento " + valorInicial++);
    System.out.println("Valor final " + valorInicial);
    valorInicial = 33;
    System.out.println("Predecremento " + --valorInicial);
    System.out.println("Postdecremento " + valorInicial--);
    System.out.println("Valor Final " + valorInicial);

    // operaciones con valores enteros
    byte edadGato = 10;
    short dobleDeEdad = (short) (edadGato * 2);
    // no sirve declarar funciones otro tipo de datos diferentes a int,
    // si al final vas a hacer operaciones son otros tipos de datos por que gastas
    // computo

    // operaciones con int
    int edadPerro = 10;
    int edadPerroDoble = edadPerro * 2;

    // operadores comparativos
    // El resultado es boolean
    // <, <=, >, >=, ==, !=
    int numEmpleados = 1000;
    System.out.println("Empleados > 1000 " + (numEmpleados > 1000));
    System.out.println("Empleados >= 1000 " + (numEmpleados > +1000));
    System.out.println("Empleados == 1000 " + (numEmpleados == 1000));
    System.out.println("Empleados != 1000 " + (numEmpleados != 1000));

    // Operadores logicos
    // && (AND) retorna true si ambos operadores son true
    // || (OR) retorna true si cualquiera de los operandos es true
    // ! (NOT) invierte el resultado booleano

    System.out.println("Empleados > 0 && Empleados < 2000 " + (numEmpleados > 0 && numEmpleados < 2000));
    // System.out.println("2000 > Empleados > 0" + (2000 > numEmpleados > 1000)); //
    // Esto no se puede

    boolean a = true;
    boolean b = false;
    boolean c = true;

    // Precedencia de operadores ! -> && -> ||
    System.out.println((a && b) || (a && c)); // true
    System.out.println(a || b || c && a); // true
    System.out.println(!(a || b) && (!a || c)); // false
    System.out.println(a || b && c || a && b); // true

    // --------------------------------------------------------
    // Una excepcion lo puedes cachar un error ya no
    // int divisionPorCero = 45 / 0; En java ocurre una excepcion al hacer division
    // por 0

  }
}
