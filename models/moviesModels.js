const conn = require("../utils/conn");

module.exports = {
  //电影数据查询
  getMovieList(callback) {
    //创建sql语句
    let sql =
      "select * from movies inner JOIN category on movies.cateId = category.cate_id and movies.__v = 0";
    conn.query(sql, (err, results, fileds) => {
      if (err) {
        callback(err);
      } else {
        callback(null, { data: results });
        // console.log(results)
      }
    });
  },

  //根据电影id查询
  getMovieById(movie_id, callback) {
    console.log(movie_id);
    let sql = `select * from movies where movie_id = ${movie_id}`;
    conn.query(sql, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },

  //根据电影id删除
  delMovieById(movie_id, callback) {
    console.log(movie_id);
    
    let sql = `update movies set __v = 1 where movie_id = ${movie_id}`;
    conn.query(sql, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },

  //根据cateId查询
  getMovieBycateId(cateId, callback) {
    console.log(cateId);
    let sql = `select * from movies where cateId = ${cateId} and movies.__v = 0`;
    conn.query(sql, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },

  //根据电影名进行模糊查询
  getByMovieName(movieName, callback) {
    console.log(movieName);
    let sql = `select * from movies where movieName like "%${movieName}%"`;
    conn.query(sql, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
};
