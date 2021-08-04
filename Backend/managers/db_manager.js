const { getPool } = require('../database/db');

const pool = getPool();
module.exports.greeting = function () {
    const query = `SELECT greeten from greeting`;
    const query2 = `SELECT greetchi from greeting`;
    const query3 = `SELECT botgreeten from greeting`;
    const query4 = `SELECT botgreetchi from greeting`;
    return pool.query(query, query2, query3, query4).then((result) => result.rows);
};