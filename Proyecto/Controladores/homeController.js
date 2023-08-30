const db = require('../db.js')

module.exports.getHome = (req, res) => res.send('hola');

async function getUser(username) {
    try {
      const user = await db.query('SELECT * FROM users WHERE username = ?', [username]);
      return user[0];
    } catch (error) {
      throw error;
    }
  }

