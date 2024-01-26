const path = require("path");
const categoryModels = require("../models/categoryModels");

module.exports = {
  //电影列表查询
  categoryList(req, res) {
    categoryModels.categoryList((err, rows) => {
      if (err) {
        res.send({ code: 0, msg: "获取失败" });
      } else {
        res.send({ code: 1, msg: "获取成功", rows });
        // console.log(data)
      }
    });
  },
};