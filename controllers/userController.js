const path = require("path");
const userModel = require("../models/userModel");
const md5 = require("md5");
const jwt = require("jsonwebtoken");
// 密钥
const mykey = "web_key";
// 其它配置，如过期时间
const options = {
  expiresIn: "1d",
};
module.exports = {

  getuser(req, res) {
    let username = req.query.username;
    console.log(req.query);
    userModel.getuser(username, (err, data) => {
      if (err) {
        res.send({ code: 0, msg: "查询失败" });
      } else {
        if (data.length === 0) {
          res.send({ code: 101, msg: "未查找到用户", data });
        } else {
          res.send({ code: 1, msg: "查询成功", data });
        }
      }
    });
  },

  //注册
  register(req, res) {
    let obj = req.body;
    let password = md5(req.body.password);
    req.body.password = password;
    console.log(obj);
    // return
    userModel.register(obj, (err, data) => {
      if (err) {
        res.send({ code: 0, msg: "注册失败" });
      } else {
        res.send({ code: 1, msg: "注册成功" });
      }
    });
  },

  edituser(req, res) {
    let obj = req.body;
    let password = md5(req.body.password);
    req.body.password = password;
    console.log(obj);
    // return
    userModel.edituser(obj, (err, data) => {
      if (err) {
        console.log(err)
        res.send({ code: 0, msg: "修改失败" });
      } else {
        res.send({ code: 1, msg: "修改成功" });
      }
    });
  },

  //登录
  login(req, res) {
    let obj = req.body;
    let password = md5(req.body.password);
    let username = obj.username;
    req.body.password = password;
    console.log(obj);
    userModel.login(obj.username, (err, data) => {
      if (err) {
        res.send({ code: 0, msg: "服务器异常" });
      } else {
        // 有对象，说明根据用户名查询到了相应的用户数据
        if (data) {
          // 再判断密码否正确
          if (data.password == obj.password) {
            // 登陆成功，生成token，并以数据的形式返回
            let token = jwt.sign(obj, mykey, options);
            res.send({ code: 1, msg: "登陆成功", data, token, username });
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
};
