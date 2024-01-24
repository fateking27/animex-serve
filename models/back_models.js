// 暴露
const conn = require("../utils/conn")

module.exports = {
    // 获取数据
    getmovie(callback) {
        // sql语句
        let sqlStr = "select * from moview where isdel = 0 ";
        conn.query(sqlStr, (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(null, result);
            }
        })
    },
    getlist(callback) {
        let sqlStr = "select * from admins ";
        conn.query(sqlStr, (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(null, result);
            }
        })
    },
    // 分类列表
    postadmin(cateName, callback) {
        let sqlStr = `INSERT INTO category (cateName) VALUES ('${cateName}')`; // 将cateName添加到SQL语句中
        conn.query(sqlStr, (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(null, result);
            }
        })
    },

    checkcate(obj, callback) {
        //创建sql语句
        let sql = `select * from category where category.cateName = '${obj.cateName}' and category.__v = 0`;
        conn.query(sql, (err, results, fileds) => {
          if (err) {
            callback(err);
          } else {
            callback(null, { data: results });
            // console.log(results)
          }
        });
      },

    // 获取分类列表
    getadmin(callback) {
        let sqlStr =
            "SELECT DISTINCT * FROM moview INNER JOIN category ON moview.cid = category.id"
        conn.query(sqlStr, (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(null, result);
            }
        })
    },
    // 删除
    dellist(id, callback) {
        let sqlStr = `DELETE FROM category WHERE cate_id = ${id}`;
        conn.query(sqlStr, function (err, results) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, results);
            }
        });
    },
    // 上传成功
    postmovies(obj, callback) {
        let sqlStr = `insert into movies set ?`;
        console.log(obj)
        conn.query(sqlStr,obj, function (err, results) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, results);
            }
        });
    },
    // 上传图片
    // postmovieImg(data, callback) {
    //     let sqlStr = `INSERT INTO moview (movieimg) VALUES ('${data.movieimg}')`;
    //     conn.query(sqlStr, function (err, results) {
    //         if (err) {
    //             callback(err, null);
    //         } else {
    //             callback(null, results);
    //         }
    //     });
    // },
}
