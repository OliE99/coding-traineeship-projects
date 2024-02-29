SELECT * FROM customers LIMIT 10;
SELECT * FROM orders LIMIT 10;
SELECT * FROM books LIMIT 10;

SELECT * FROM pg_indexes WHERE tablename = 'customers';
SELECT * FROM pg_indexes WHERE tablename = 'books';
SELECT * FROM pg_indexes WHERE tablename = 'orders';

EXPLAIN ANALYZE SELECT customer_id, quantity FROM orders WHERE quantity > 18;

CREATE INDEX orders_customer_id_quantity_idx ON orders(customer_id, quantity);

EXPLAIN ANALYZE SELECT customer_id, quantity FROM orders WHERE quantity > 18;

ALTER TABLE customers 
ADD CONSTRAINT customers_pkey
PRIMARY KEY (customer_id);

EXPLAIN ANALYZE SELECT *
FROM customers 
WHERE customer_id < 100;

CLUSTER customers USING customers_pkey;

SELECT * FROM customers 
ORDER BY customer_id
LIMIT 10;

CREATE INDEX orders_customer_id_book_id_idx ON orders(customer_id, book_id);

SELECT customer_id, book_id
FROM orders
LIMIT 10;

DROP INDEX IF EXISTS orders_customer_id_book_id_idx;

CREATE INDEX orders_customer_id_book_id_quantity_idx ON orders (customer_id, book_id, quantity);

SELECT customer_id, book_id, quantity
FROM orders
WHERE customer_id < 10
ORDER BY customer_id;

CREATE INDEX books_author_title_idx ON books(author, title);

SELECT * FROM pg_indexes WHERE tablename = 'books';

EXPLAIN ANALYZE SELECT * FROM orders WHERE (quantity * price_base) > 100; 
--> Planning time: 0.034 ms
--> Execution time: 33.756 ms

CREATE INDEX orders_total_price_idx ON orders ((quantity * price_base));

EXPLAIN ANALYZE SELECT * FROM orders WHERE (quantity * price_base) > 100; 
--> Planning time: 0.147 ms
--> Execution time: 15.826 ms

SELECT *
FROM pg_indexes 
WHERE tablename IN ('customers', 'books', 'orders')
ORDER BY tablename, indexname;

DROP INDEX IF EXISTS books_author_idx;

DROP INDEX IF EXISTS orders_customer_id_quantity_idx;

EXPLAIN ANALYZE SELECT * FROM customers WHERE last_name = 'Cooper';
--> Planning time: 0.039 ms
--> Execution time: 9.751 ms

CREATE INDEX customers_last_name_first_name_email_address ON customers (last_name, first_name, email_address);

SELECT *
FROM pg_indexes
WHERE tablename IN ('customers', 'books', 'orders')
ORDER BY tablename, indexname;

EXPLAIN ANALYZE SELECT * FROM customers WHERE last_name = 'Cooper';
--> Planning time: 0.103 ms
--> Execution time: 0.942 ms