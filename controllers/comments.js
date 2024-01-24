const path = require("path");
const commentsModels = require("../models/comments");
const moment = require('moment')

module.exports = {
 
  commentsList(req, res) {
    commentsModels.commentsList((err, data) => {
      if (err) {
        res.send({ code: 0, msg: "获取失败" });
      } else {
        res.send({ code: 1, msg: "获取成功", data });
        // console.log(data)
      }
    });
  },

  //添加
  addcomments(req, res) {
    let obj = req.body;
    req.body.createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
    req.body.updatedAt = moment().format("YYYY-MM-DD HH:mm:ss");
    // console.log(obj);
    // return
    commentsModels.addcomments(obj, (err, data) => {
      if (err) {
        res.send(err)
        res.send({ code: 0, msg: "添加失败" });
      } else {
        res.send({ code: 1, msg: "添加成功" });
      }
    });
  },
};