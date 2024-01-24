const conn = require("../utils/conn");

module.exports = {
  categoryList(callback) {
    //创建sql语句
    let sql = "select * from type";
    conn.query(sql, (err, results, fileds) => {
      if (err) {
        callback(err);
      } else {
        callback(null, { total: results.length, data: results });
        // console.log(results);
      }
    });
  },
};
