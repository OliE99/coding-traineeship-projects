SELECT * FROM customers LIMIT 10;
SELECT * FROM orders LIMIT 10;
SELECT * FROM books LIMIT 10;

SELECT *
FROM pg_indexes
WHERE tablename = 'customers';

SELECT *
FROM pg_indexes
WHERE tablename = 'orders';

SELECT *
FROM pg_indexes
WHERE tablename = 'books';

CREATE INDEX orders_customer_book ON orders (customer_id, book_id);

EXPLAIN ANALYZE SELECT original_language, title, sales_in_millions FROM books WHERE original_language = 'French'; 

SELECT pg_size_pretty (pg_total_relation_size('books'));

CREATE INDEX books_languages_titles_copies ON books (original_language, title, sales_in_millions);

EXPLAIN ANALYZE SELECT original_language, title, sales_in_millions FROM books;

DROP INDEX IF EXISTS books_languages_titles_copies;

DROP INDEX IF EXISTS orders_customer_book;

SELECT NOW();

\COPY orders FROM 'orders_add.txt' DELIMITER ',' CSV HEADER;

-- pg_size prior to CREATE INDEX = 13MB
SELECT pg_size_pretty (pg_total_relation_size('customers'));

-- Added last_name to help with query searches
CREATE INDEX customer_contact_info ON customers (last_name, first_name, email_address);

SELECT *
FROM pg_indexes
WHERE tablename = 'customers';

-- pg_size after CREATE INDEX = 19MB (database is slower and has imapacted INSERT, UPDATE and DELETE)
SELECT pg_size_pretty (pg_total_relation_size('customers'));

-- LGTM --> For now best to keep customer_contact_info idx and discuss with boss pros and cons for the db. 