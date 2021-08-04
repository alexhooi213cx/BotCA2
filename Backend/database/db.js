const pg = require('pg');
const { DB_CONFIG } = require('../commons');

let pool;
module.exports.getPool = function () {
    if (!pool) pool = new pg.Pool(DB_CONFIG);
    return pool;
};
module.exports.tearDown = function () {
    return module.exports.getPool().end();
};



/* const { Client } = require('pg')
const pgclient = new Client({
user: 'eyyyfpsw',
host: 'john.db.elephantsql.com',
database: 'eyyyfpsw',
password: 'TOxwbE9xMxyPv20Rfdzw-vhWJqwroBh6',
port: 5432,
})

function greeting(){
    pgclient.connect()
    const query = `SELECT greeten from greeting`;
    const query2 = `SELECT greetchi from greeting`;
    const query3 = `SELECT botgreeten from greeting`;
    const query4 = `SELECT botgreetchi from greeting`;
    pgclient.query(query, query2, query3, query4, (err, res) => {
      console.log(err, res)
      
      pgclient.end()
    })
}
 */