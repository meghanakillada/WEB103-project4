import { pool } from './database.js';

const createTables = async () => {
    const createItemsTableQuery = `
        CREATE TABLE IF NOT EXISTS items (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100),
            description TEXT,
            price INT
        );
    `;

    await pool.query(createItemsTableQuery);
    console.log('Tables created successfully!');
};

createTables()
    .then(() => process.exit(0))
    .catch(err => {
        console.error('Error creating tables', err);
        process.exit(1);
    });