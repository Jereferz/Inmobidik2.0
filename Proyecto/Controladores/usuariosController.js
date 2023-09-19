const db = require('../db');

async function getUser(username) {
    try {
      const user = await db.query('SELECT * FROM users WHERE username = ?', [username]);
      return user[0];
    } catch (error) {
      throw error;
    }
}