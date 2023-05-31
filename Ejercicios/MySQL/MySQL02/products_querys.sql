SELECT * FROM products;
-- Productos de la categoria 1
SELECT * FROM products WHERE category_id = 1;

-- Productos de la categoria moda.
SELECT * FROM products WHERE category_id = 3;

-- Productos que su categoria es null
SELECT * FROM products WHERE category_id is null;

-- Productos que en su nombre contenga moda
SELECT * FROM products WHERE `name` LIKE "%moda%";