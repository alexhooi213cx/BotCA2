const { getPool } = require('../database/db');

const pool = getPool();
module.exports.greeting = function () {
    const query = `SELECT greeten from greeting`;
    

      /*   query1:`SELECT greeten from greeting`,
        query2:`SELECT greetchi from greeting`,
        query3:`SELECT botgreeten from greeting`,
        query4:`SELECT botgreetchi from greeting` */
      
    return pool.query(query).then((result) => result.rows);
};
module.exports.greeting2 = function () {
    const query2 = `SELECT greetchi from greeting`;
    

      /*   query1:`SELECT greeten from greeting`,
        query2:`SELECT greetchi from greeting`,
        query3:`SELECT botgreeten from greeting`,
        query4:`SELECT botgreetchi from greeting` */
      
    return pool.query(query2).then((result) => result.rows);
};