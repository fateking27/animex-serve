const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "rm-cn-wwo3kw76y000y9ho.rwlb.rds.aliyuncs.com",
  user: "root",
  password: "King123155201314",
  database: "acgn_information",
  timezone: "UTC",
});

module.exports = conn;
