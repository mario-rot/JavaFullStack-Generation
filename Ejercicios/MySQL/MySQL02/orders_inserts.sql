USE `ch26-ecommerce`;
-- Inserts for customer_id = 1
INSERT INTO orders (order_id, customer_id, purchase_date, delivery_date, customer_customer_id)
VALUES (1, 1, '2023-05-01', '2023-05-08', 1);

INSERT INTO orders (order_id, customer_id, purchase_date, delivery_date, customer_customer_id)
VALUES (2, 1, '2023-05-02', '2023-05-09', 1);

-- Inserts for customer_id = 2
INSERT INTO orders (order_id, customer_id, purchase_date, delivery_date, customer_customer_id)
VALUES (3, 2, '2023-05-03', '2023-05-10', 2);

INSERT INTO orders (order_id, customer_id, purchase_date, delivery_date, customer_customer_id)
VALUES (4, 2, '2023-05-04', '2023-05-11', 2);

-- Inserts for customer_id = 3
INSERT INTO orders (order_id, customer_id, purchase_date, delivery_date, customer_customer_id)
VALUES (5, 3, '2023-05-05', '2023-05-12', 3);

INSERT INTO orders (order_id, customer_id, purchase_date, delivery_date, customer_customer_id)
VALUES (6, 3, '2023-05-06', '2023-05-13', 3);

-- Inserts for customer_id = 4
INSERT INTO orders (order_id, customer_id, purchase_date, delivery_date, customer_customer_id)
VALUES (7, 4, '2023-05-07', '2023-05-14', 4);

INSERT INTO orders (order_id, customer_id, purchase_date, delivery_date, customer_customer_id)
VALUES (8, 4, '2023-05-08', '2023-05-15', 4);

-- Inserts for customer_id = 5
INSERT INTO orders (order_id, customer_id, purchase_date, delivery_date, customer_customer_id)
VALUES (9, 5, '2023-05-09', '2023-05-16', 5);

INSERT INTO orders (order_id, customer_id, purchase_date, delivery_date, customer_customer_id)
VALUES (10, 5, '2023-05-10', '2023-05-17', 5);

-- Inserts for customer_id = 6
INSERT INTO orders (order_id, customer_id, purchase_date, delivery_date, customer_customer_id)
VALUES (11, 6, '2023-05-11', '2023-05-18', 6);

INSERT INTO orders (order_id, customer_id, purchase_date, delivery_date, customer_customer_id)
VALUES (12, 6, '2023-05-12', '2023-05-19', 6);

SELECT * from orders;