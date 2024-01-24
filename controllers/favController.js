const favModel = require("../models/favModel");
const moment = require("moment");

module.exports = {
  //添加
  // addfav(req, res) {
  //   let obj = req.body;
  //   // req.body.createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
  //   req.body.fav_updated = moment().format("YYYY-MM-DD HH:mm:ss");
  //   // console.log(obj);
  //   // return
  //   favModel.addfav(obj, (err, data) => {
  //     if (err) {
  //       res.send(err)
  //       res.send({ code: 0, msg: "添加失败" });
  //     } else {
  //       res.send({ code: 1, msg: "添加成功" });
  //     }
  //   });
  // },
  addfav(req, res) {
    let obj = req.body;
    // 查询数据库，检查用户是否已经收藏了该影片
    favModel.checkFav(obj, (err, result) => {
      if (err) {
        console.log(err)
        res.send({ code: 0, msg: "添加失败" });
      } else {
        console.log(result)
        if (result.data.length > 0) {
          // 用户已经收藏了该影片，返回错误响应
          res.send({ code: 0, msg: "您已经收藏过该影片" });
        } else {
          // return
          // 用户还没有收藏该影片，继续执行添加收藏的逻辑
          req.body.fav_updated = moment().format("YYYY-MM-DD HH:mm:ss");
          favModel.addfav(obj, (err, data) => {
            if (err) {
              res.send({ code: 0, msg: "添加失败" });
            } else {
              res.send({ code: 1, msg: "添加成功" });
            }
          });
        }
      }
    });
  },
  //删除
  delfav(req, res) {
    let fav_id = req.query.fav_id;
    if (!fav_id) {
      return res.status(400).json({ code: 0, msg: "参数不存在" });
    }
    favModel.delfav(fav_id, (err) => {
      if (err) {
        res.json({ code: 0, msg: "删除失败" });
      } else {
        res.json({ code: 1, msg: "删除成功" });
      }
    });
  },
  //获取收藏列表数据
  favlist(req, res) {
    favModel.favlist((err, data) => {
      if (err) {
        res.send({ code: 0, msg: "获取失败" });
      } else {
        res.send({ code: 1, msg: "获取成功", data });
        // console.log(data)
      }
    });
  },
};
