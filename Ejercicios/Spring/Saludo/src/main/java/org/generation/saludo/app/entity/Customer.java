package org.generation.saludo.app.entity;
import java.io.Serializable;
/*
* La interfaz serializable indica que la clase puede ser serializada
* Al implementar la interfaz, una clase peude convertirse
* en una secuencia de bytes que puede ser guardada en un archivo o ser transmitida a traves de la red*/


public class Customer implements Serializable{

    public static final long serialVersionUID = 1L;

    private int id;
    private String firstName;
    private String lastName;

    public Customer(int id, String firstName, String lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
