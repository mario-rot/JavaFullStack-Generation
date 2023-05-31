SELECT * FROM products;

-- Listar productos >* 100 y <= 500 en el precio
SELECT * FROM products WHERE price >= 100 AND price <= 500;

-- Between
SELECT * FROM products WHERE price BETWEEN 100 AND 500;
-- Between
SELECT * FROM products WHERE NOT price BETWEEN 100 AND 500;

-- Cuantos items estan en ese rango
SELECT COUNT(price) FROM products WHERE price >= 100 AND price <= 500;
-- Listar los articulos que no cuesten 99.99
SELECT * FROM products WHERE price != 99.99;
SELECT * FROM products WHERE price <> 99.99;

-- IN, indicar valores que esten dentro de una lista
SELECT * FROM products WHERE price IN (49.99, 99.99, 149.99);
-- Indicar articulos que NO esten dentro de una lista
SELECT * FROM products WHERE price NOT IN (49.99, 99.99, 149.99);
-- Establecer en null en category_if los articulos entre 100 y 200
UPDATE products SET category_id = NULL WHERE price BETWEEN 100 AND 200;
-- category_id = null, category_id IS NULL; 
SELECT * FROM products WHERE category_id IS NULL;
SELECT * FROM products WHERE ISNULL(category_id);  
-- Not Null
SELECT * FROM products WHERE category_id IS NOT NULL; 

-- Operaciones aritmeticas
-- Aplicar un 10% de descuento a todos los articulos
SELECT name, price, price*.9 AS "precio hotSale 2023" FROM products;

-- 12MSI, mostrar columna, con el pago mensual
SELECT name, price, price/12 AS "precio 12 msi" FROM products;
SELECT name, price, TRUNCATE(price*0.9,2) AS "precio HotSale 2023", TRUNCATE((price*0.9)/12, 2) AS "Mensualidades" FROM products;

-- ABS() valor absoluto
-- CEIL() redondeo hacia arriba
-- FLOOR() Devolver el entero mas grande no mayor al numero dato
-- MOD() residuo de la division
-- PI() valor de pi
-- POWER(2,8) 2 elevado a la potencia 8
-- RAND() Genera un numero aleatorio entre 0 y 1.
-- ROUND() Redondear hacia arriba si es >= 0.5
SELECT ROUND(12.4) AS "Redondeo"