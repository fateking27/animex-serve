const conn = require("../utils/conn");

module.exports = {
  register(obj, callback) {
    console.log(obj);
    //创建sql语句
    let sql = "insert into members set ?";
    conn.query(sql, obj, (err, results, fileds) => {
      if (err) {
        callback(err);
      } else {
        callback(null, { data: results });
        // console.log(results)
      }
    });
  },

  edituser(obj, callback) {
    console.log(obj);
    //创建sql语句
    // return
    let sql = "update members set ? where user_id=?";
    conn.query(sql, [obj,obj.user_id], (err, results, fileds) => {
      if (err) {
        callback(err);
      } else {
        callback(null, { data: results });
        // console.log(results)
      }
    });
  },

  // 根据用户名查询用户信息
  login(username, callback) {
    let sql = `select * from members where username= '${username}'`;
    conn.query(sql, (err, results) => {
      if (err) {
        callback(err);
      } else {
        console.log(results);
        callback(null, results[0]);
      }
    });
  },

  //根据用户名查找用户数据
  getuser(username,callback) {
    //创建sql语句
    let sql = `select * from members where username= '${username}'`;
    conn.query(sql, (err, results, fileds) => {
      if (err) {
        callback(err);
      } else {
        callback(null, { data: results });
        // console.log(results)
      }
    });
  },
};
