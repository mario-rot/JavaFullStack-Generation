package org.generation.saludo.app.controller;

import org.generation.saludo.app.entity.Customer;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

    /*
    * @RestController indica que la clase sera un controlador API REST
    * Esta notacion combina @Controller y @ResponsiveBody
    *
    * @Controller indica la clase como un controlador MVC (Model-view-controller).
    * Esta clase se encarga de manejar las solicitudes HTTP y devuelve una respuesta
    * @ResponsiveBody indica que los metodos devuelven las respuestas en el cuerpo de la respuesta HTTP.
    * Los objetos devueltos por los metodos se serializan automaticamente en el formado deseado. Por default la respuesta es en JSON
    *
    * @RequestMapping mapea una solicitud HTTP en la URL indicada.
    * Se puede aplixar a nivel de clase o metodo.
    * A nivel de clase define el prefijo comuin de la URL para todas las rutas de los metodos.
    * */

    @RestController
    @RequestMapping("api/saludo") // http://localhost:8080/api/saludo
    public class SaludoController {
        /*
        * @GetMapping mapea solicitudes HTTP GET
        * Entre parentesis indica la ruta donde se mapeara. A esta ruta
        * se incluye el prefijo definido con @RequestMapping en la clase
        * */

        @GetMapping("ch26") // // http://localhost:8080/api/saludo/ch26
        public String saludoCh26(){
            return "Hola mundo y CH26";
        }

        @GetMapping
        public Customer getCustomer() {
            Customer customer = new Customer(1, "Pato", "Donald");
            return customer;
        }
    }
