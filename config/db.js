const mysql2 = require("mysql2/promise");

require("dotenv").config();

const connection = mysql2.createPool({
  host: 'roundhouse.proxy.rlwy.net',
  user: 'root',
  port: '46785',
  password: 'dPLNXWMXwxFnffTPjiFNjjOVNgZbLQor',
  database: 'railway',
});

module.exports = connection;