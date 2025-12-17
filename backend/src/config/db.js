const Database = require ('better-sqlite3');

const db = new Database('devocional.db');
db.prepare(`
    CREATE TABLE IF NOT EXISTS devocionais (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        tema TEXT NOT NULL,
        plano TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`).run();
    
module.exports = db;