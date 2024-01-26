const conn = require("../utils/conn");
const moment = require("moment");
// const md5 = require("md5");

module.exports = {
  categoryList(callback) {
    //创建sql语句
    let sql =
      "select * from info_type inner join type on info_type.type = type.type_id";
    conn.query(sql, (err, results, fileds) => {
      if (err) {
        callback(err);
      } else {
        // let data = results
        let data = results.map((item) => {
          let type = { type_id: item.type_id, type_name: item.type_name };
          delete item.type_name
          delete item.type_id
          return {
            ...item,
            time: moment(item.time).format("YYYY-MM-DD"), //处理时间格式
            type: type,
          };
        });
        callback(null, { total: results.length, data });
        console.log(data);
      }
    });
  },
};
