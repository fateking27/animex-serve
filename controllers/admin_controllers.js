// 引入资源
const moviemodel = require('../models/admin_models')
const jwt = require("jsonwebtoken");
// 密钥
const mykey = "web_key";
// 其它配置，如过期时间
const options = {
  expiresIn: "1d",
};

module.exports = {
    // 获取数据
    postadmin(req, res) {
        let obj = req.body;
        let admin_name = obj.username;
        console.log(obj);
        // moviemodel.postadmin(obj,(err, data) => {
        //     if (err) {
        //         res.send({ code: 0, msg: "失败" })
        //     } else {
        //         res.send({ code: 0, msg: "成功", data })
        //     }
        // });
        moviemodel.postadmin(obj, (err, data) => {
            if (err) {
                console.log(err)
                res.send({ code: 0, msg: "服务器异常" });
            } else {
              // 有对象，说明根据用户名查询到了相应的用户数据
              if (data) {
                console.log(data)
                // 再判断密码否正确
                if (data.password == obj.password) {
                  // 登陆成功，生成token，并以数据的形式返回
                  let admin_token = jwt.sign(obj, mykey, options);
                  res.send({ code: 1, msg: "登陆成功", data, admin_token, admin_name });
                } else {
                  res.send({ code: 0, msg: "密码错误" });
                }
              }
              // 说明根据用户名没有查询到数据
              else {
                res.send({ code: 0, msg: "用户名不存在" });
              }
            }
          });
    },
}