package org.generation;

import java.util.Scanner;

public class MangosNaranjas {
    public static void main(String[] args) {

        Scanner myScan = new Scanner(System.in);

        System.out.print("Introduce el numero de mangos: ");
        int numMangos = myScan.nextInt();
        System.out.print("Introduce el numero de naranjas: ");
        int numNaranjas = myScan.nextInt();
        int mcd = 0;

        for (int i=1; i<numMangos; i++){
            if (numMangos%i==0 && numNaranjas%i==0){
                mcd = i;
            }
//            System.out.println("Numero de cajas necesarias: " + mcd);
        }
        System.out.println("Numero de cajas necesarias: " + mcd);


        double mangosxCaja =  numMangos/mcd;
        double naranjasxCaja = numNaranjas/mcd;

        System.out.printf("Mangos por caja: %.02f  --- Naranjas por caja: %.02f", mangosxCaja, naranjasxCaja);
    }
}