const conn = require("../utils/conn");

module.exports = {
    commentsList(callback) {
    //创建sql语句
    let sql = "select * from comments inner join members on comments.userId = members.user_id inner join movies on comments.movieId = movies.movie_id and comments.__v = 0";
    conn.query(sql, (err, results, fileds) => {
      if (err) {
        callback(err);
      } else {
        callback(null, { data: results });
        // console.log(results)
      }
    });
  },
  addcomments(obj, callback) {
    console.log(obj);
    //创建sql语句
    let sql = "insert into comments set ?";
    conn.query(sql, obj, (err, results, fileds) => {
      if (err) {
        callback(err);
      } else {
        callback(null, { data: results });
        // console.log(results)
      }
    });
  },
};