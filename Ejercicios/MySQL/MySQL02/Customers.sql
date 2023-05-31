-- Cargando la DB
USE `ch26-ecommerce`;

-- Insertando un registro, especificando la DB.
INSERT INTO `ch26-ecommerce`.`customer`(`customer_id`,`firstname`, `lastname`, `address`, `email`)
VALUES(1,"Sergio","Torres", "Av. siempre viva", "sergio@gmail.com");

-- Insertando un registro con ID 100
INSERT INTO `ch26-ecommerce`.`customer`(`firstname`, `lastname`, `address`, `email`)
VALUES("Berenice","Gudino", "Calle Las Palmas n.45", "berenice@gmail.com");

-- Insertando un registro, usando autoincrement, no agregar el customer_id
INSERT INTO `ch26-ecommerce`.`customer`(`firstname`, `lastname`, `address`, `email`)
VALUES("Abraham","Castillo", "Calle Hidalgo no.89", "abraham@gmail.com");

-- Modificando Ids de 100->2, 101->3, 102->4
UPDATE customer
   SET customer_id = CASE customer_id 
                      WHEN 100 THEN 2 
                      WHEN 101 THEN 3
                      WHEN 102 THEN 4
                      WHEN 103 then 5
                      WHEN 104 then 6
                      ELSE customer_id
                      END
 WHERE customer_id IN(100, 101,102,103,104); 

-- Insertando un registro, usando autoincrement, no agregar el customer_id
INSERT INTO `ch26-ecommerce`.`customer`(`firstname`, `lastname`, `address`, `email`)
VALUES("Nicolas","Walser", "4-Privet Drive", "nicolas@gmail.com");

-- Reiniciamos el contados de AutoIncrement
ALTER TABLe customer AUTO_INCREMENT = 1;

-- Insertando un registro, usando autoincrement, no agregar el customer_id
INSERT INTO `ch26-ecommerce`.`customer`(`firstname`, `lastname`, `address`, `email`)
VALUES("Jessica","Sanchez", "Av. Las Aguilas no.90", "jessica@gmail.com");