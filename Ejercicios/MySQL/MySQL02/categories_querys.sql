SELECT * FROM categories;

-- Agregando una categoria
INSERT INTO categories (name, description) VALUES ("videojuagos","videojuegos para xbox");
-- Eliminar el registro con id -> 1
DELETE FROM categories WHERE category_id = 1;

-- Eliminar el registro con ID -> 11
DELETE FROM categories WHERE category_id = 11;

-- Modificar el registro con id->1, hacelo id->12
UPDATE categories SET category_id =12 WHERE category_id =1;