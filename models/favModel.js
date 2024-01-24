const conn = require("../utils/conn");

module.exports = {
  addfav(obj, callback) {
    console.log(obj);
    //创建sql语句
    let sql = "insert into fav set ?";
    conn.query(sql, obj, (err, results, fileds) => {
      if (err) {
        callback(err);
      } else {
        callback(null, { data: results });
        // console.log(results)
      }
    });
  },

  favlist(callback) {
    //创建sql语句
    let sql =
      "select * from fav inner join members on fav.userId = members.user_id inner join movies on fav.movieId = movies.movie_id and fav.__v = 0 and movies.__v = 0";
    conn.query(sql, (err, results, fileds) => {
      if (err) {
        callback(err);
      } else {
        callback(null, { data: results });
        // console.log(results)
      }
    });
  },
  
  checkFav(obj, callback) {
    //创建sql语句
    let sql = `select * from fav inner join members on fav.userId = ${obj.userId} inner join movies on fav.movieId = ${obj.movieId} and fav.__v = 0`;
    conn.query(sql, (err, results, fileds) => {
      if (err) {
        callback(err);
      } else {
        callback(null, { data: results });
        // console.log(results)
      }
    });
  },

  delfav(fav_id, callback) {
    //创建sql语句
    let sql = `delete from fav where fav_id = ${fav_id}`;
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
