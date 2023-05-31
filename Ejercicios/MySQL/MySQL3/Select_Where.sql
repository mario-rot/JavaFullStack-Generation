-- Se realizan operaciones matemáticas
SELECT 5 * 2;
-- Realizar consulta a la tabla products
 SELECT name, description, price FROM products;
-- Ver todos los campos de la tabla products
SELECT * FROM products;
-- Ver el campo name, description y renombrarlo
SELECT name AS "Nombre producto",
       description AS "Descripción del artículo" 
 FROM products;
-- Seleccionar solo los datos que no son repetidos
SELECT DISTINCT category_id FROM products;

SELECT * FROM orders_has_products;
-- Listado de productos que se han vendido
SELECT DISTINCT product_id FROM orders_has_products;
-- Coontabilizar los productos que se han vendido
SELECT COUNT(DISTINCT product_id) AS "N. items vendidos"
 FROM orders_has_products;
 
SELECT * FROM customers;
-- Obtener el numero de nombre distintos
SELECT COUNT(DISTINCT firstname ) FROM customer;

-- Limitar el numero de elementos consultados
SELECT * FROM customers LIMIT 5;

-- FILTRAR (WHERE) solo las personas con nombre alejandro
SELECT * FROM customer WHERE firstname = "Alejandro";
-- Numero de personas que se llaman Alejandro
SELECT COUNT(firstname) FROM customer WHERE firstname="Alejandro";
-- Filtrar las personas con nombre "Alejandra" o Alejandro
SELECT * FROM customer WHERE firstname="Alejandro" OR firstname="Alejandra";
SELECT * FROM customer WHERE firstname LIKE "Alejandr_"; -- el gion bajo es igual a un caracter indistinto
SELECT * FROM customer WHERE firstname IN ("Alejandra", "Alejandro");

-- Contar el numero de personas que tengan el correo @gmail.com
SELECT * FROM customer WHERE email LIKE "%@gmail.com";

-- Operadores logicos:  AND(&&), OR(||), NOT(!=)
SELECT * FROM customer WHERE firstname="ALEJANDRO" || firstname="Alejandra";

-- Listar los nombres que No sean "Alejandro"
SELECT * FROM customer WHERE firstname != "Alejandro";
SELECT * FROM customer WHERE NOT firstname = "Alejandro";
-- Listar los nombres != Alejandro y Alejandra
SELECT * FROM customer  WHERE NOT firstname LIKE "Alejandr_";

SELECT email FROM customer WHERE email LIKe "%@gmail.com";

-- cambiar @gamail por @gmail
UPDATE customer SET email = REPLACE(email, '@gamil.com', '@gmail.com') WHERE email LIKE "%@gamil.com"; 

-- Modificar el nombre Alejandro por Alex en donde el email !=@gmail.com
UPDATE customer SET firstname="Alex" WHERE firstname= "Alejandro" AND NOT email LIKE "%@gmail.com" ; 

SELECT * FROM customer;