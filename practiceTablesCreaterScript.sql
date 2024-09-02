
-- Step 3: Create the user table
CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    isAdmin BOOLEAN NOT NULL DEFAULT FALSE
);

-- Step 4: Create the product table
CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    picture_url VARCHAR(255) NOT NULL,
    price_huf INT NOT NULL,
    short_description TEXT NOT NULL
);

-- Step 5: Create the type table
CREATE TABLE "type" (
    id SERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    type_value VARCHAR(255) NOT NULL,
    available_count INT NOT NULL,
    product_id INT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES product(id) ON DELETE CASCADE
);

-- Step 6: Grant privileges to the practice_user
GRANT ALL PRIVILEGES ON DATABASE practice TO practice_user;

-- Grant privileges on the tables to practice_user
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO practice_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO practice_user;
GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public TO practice_user;
