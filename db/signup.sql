INSERT INTO bank_user (username, password) VALUES ($1, $2)
RETURNING * ;