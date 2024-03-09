const mysql = require("mysql2");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});


/**
 * Executes a database query with the provided query and values.
 * @param {string} query - The SQL query to execute.
 * @param {Array} values - The values to be used in the query.
 * @returns {Promise} A promise that resolves with the query results or rejects with an error.
 */
function queryDatabase(query, values) {
  
  return new Promise((resolve, reject) => {

    pool.query(query, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = {
  queryDatabase,
};
