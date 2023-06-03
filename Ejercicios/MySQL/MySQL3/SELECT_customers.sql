SELECT * FROM customer;
-- Concatenamos el nombre y apellido
SELECT customer_id AS id,
		CONCAT(firstname, ' ' , lastname) AS name,
        email
	FROM customer;
    
SELECT customer_id AS id,
		REPLACE(firstname, "Alejandro", "Alex" ) AS firstname,
        email
	FROM customer
    WHERE firstname = "Alejandro";

SELECT firstname, REPLACE(address, "Av.", "Avenida" ) AS address
	FROM customer;
    
-- Invertir una plabra
SELECT firstname, REVERSE(firstname) AS reverse_name
 FROM customer ORDER by reverse_name DESC;

-- Convertir a mayúsculas y minúsculas
SELECT 
	LOWER(firstname) AS firstname,
	UPPER(firstname) AS firstnameMayus
  FROM customer;
-- Mostrar el nombre completo( en una solo columna) en mayúsculas.
SELECT 
	upper(concat(firstname, " ", lastname)) AS name 
	FROM customer;