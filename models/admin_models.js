// // 暴露
const conn = require("../utils/conn")
const sqlString = require("sqlstring")


module.exports = {
    // 登录
    postadmin(obj, callback) {
        let username = obj.username
        // let password = sqlString.escape(obj.password);
        // console.log(username);
        let sqlStr = `SELECT * FROM admins WHERE username = '${username}'`;
        conn.query(sqlStr, (err, result) => {
            if (err) {
                if (typeof callback === 'function') {
                    callback(err);
                }
            } else {
                if (result.length > 0) {
                    // 登录成功
                    if (typeof callback === 'function') {
                        callback(null, result[0], true);
                    }
                } else {
                    // 登录失败
                    if (typeof callback === 'function') {
                        callback(err);
                    }
                }
            }
        })
    }
};