CREATE TABLE IF NOT EXISTS message(
    id PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user VARCHAR(100) NOT NULL,
    text VARCHAR(500) NOT NULL,
)