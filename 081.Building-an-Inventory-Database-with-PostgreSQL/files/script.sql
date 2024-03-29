SELECT * FROM parts LIMIT 10;

ALTER TABLE parts
ALTER COLUMN code SET NOT NULL;

ALTER TABLE parts
ADD UNIQUE(code);

CREATE TABLE part_descriptions (
    id int PRIMARY KEY, 
    description text
);

INSERT INTO part_descriptions VALUES (1, '5V resistor'), (2, '3V resistor');

UPDATE parts
SET description = part_descriptions.description
from part_descriptions
where part_descriptions.id = parts.id
and parts.description IS NULL;

ALTER TABLE parts 
ALTER COLUMN description SET NOT NULL;

INSERT INTO parts (id, description, code, manufacturer_id) VALUES (54, '8V resistor', 'V1-009', 9);

ALTER TABLE reorder_options 
ALTER COLUMN price_usd SET NOT NULL;

ALTER TABLE reorder_options 
ADD CHECK (price_usd > 0 AND quantity > 0);

ALTER TABLE reorder_options
ADD CHECK (price_usd/quantity > 0.02 AND price_usd/quantity < 25.00);

ALTER TABLE parts 
ADD PRIMARY KEY (id);

ALTER TABLE reorder_options 
ADD FOREIGN KEY (part_id) REFERENCES parts (id);

ALTER TABLE locations 
ADD CHECK (qty > 0);

ALTER TABLE locations 
ADD UNIQUE (part_id, location);

ALTER TABLE locations 
ADD FOREIGN KEY (part_id) REFERENCES parts (id);

ALTER TABLE parts 
ADD FOREIGN KEY (manufacturer_id) REFERENCES manufacturers (id);

SELECT * 
FROM manufacturers
LIMIT 10;

INSERT INTO manufacturers(name, id)
VALUES ('Pip-NNC Industrial', 11);

UPDATE parts
SET manufacturer_id = 11
WHERE manufacturer_id IN (1, 2);

SELECT * 
FROM parts
WHERE manufacturer_id = 11;