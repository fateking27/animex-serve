const moviemodel = require('../models/back_models')
const moment = require('moment')
module.exports = {
    getmovie(req, res) {
        moviemodel.getmovie((err, data) => {
            if (err) {
                res.send({ code: 0, msg: "获取失败" });
            } else {
                res.send({ code: 1, msg: "获取成功", data });
            }
        })
    },
    getlist(req, res) {
        moviemodel.getlist((err, data) => {
            if (err) {
                res.send({ code: 0, msg: "获取失败" });
            } else {
                res.send({ code: 1, msg: "获取成功", data });
            }
        })
    },
    // 分类
    postadmin(req, res) {
        let obj = req.body
        let cateName = req.body.cateName
        console.log(cateName)
        // moviemodel.postadmin(cateName, (err, data) => {
        //     if (err) {
        //         res.send({ code: 0, msg: "上传分类失败" })
        //     } else {
        //         res.send({ code: 1, msg: "上传分类成功", data })
        //     }
        // })

        // 查询数据库，检查用户是否已经添加类似分类
        moviemodel.checkcate(obj, (err, result) => {
        if (err) {
          console.log(err)
          res.send({ code: 0, msg: "添加失败" });
        } else {
          console.log(result)
          if (result.data.length > 0) {
            // 用户已经添加，返回错误响应
            res.send({ code: 0, msg: "已添加过相同分类" });
          } else {
            // return
            // req.body.fav_updated = moment().format("YYYY-MM-DD HH:mm:ss");
            moviemodel.postadmin(cateName, (err, data) => {
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
    // 获取分类
    getadmin(req, res) {
        moviemodel.getadmin((err, data) => {
            if (err) {
                res.send({ code: 0, msg: "获取分类失败" })
            } else {
                res.send({ code: 1, msg: "分类获取成功", data })
            }
        })
    },
    // 删除分类
    dellist(req, res) {
        const id = req.query.cate_id
        console.log(id);
        moviemodel.dellist(id, (err, data) => {
            if (err) {
                console.log(err)
                res.send({ code: 0, msg: "获取分类失败" })
            } else {
                res.send({ code: 1, msg: "删除成功", data })
            }
        })
    },
    // 新增数据
    addmoview(req, res) {
        const img = req.body.img
        console.log(img);
        moviemodel.addmoview(img, (err, data) => {
            if (err) {
                res.send({ code: 0, msg: "上传成功" })
            } else {
                res.send({ code: 1, msg: "上传失败", data })
            }
        })
    },
    // 新增数据
    postmovies(req, res) {
        const obj = req.body
        // console.log(fromdata);
        console.log(req.body)
        req.body.movie_created = moment().format('YYYY-MM-DD HH:mm:ss');
        req.body.movie_updated = moment().format("YYYY-MM-DD HH:mm:ss");
        moviemodel.postmovies(obj, (err, data) => {
            if (err) {
                console.log(err)
                res.send({ code: 0, msg: "上传失败" })
            } else {
                res.send({ code: 1, msg: "上传成功", data })
            }
        })
    },
    // 图片数据
    // postmovieImg(req, res) {
    //     const fromdata = req.body
    //     const fileObj = req.file;
    //     console.log(fileObj);
    //     moviemodel.postmovieImg(fileObj, (err, data) => {
    //         if (err) {
    //             res.send({ code: 0, msg: "上传失败" })
    //         } else {
    //             res.send({ code: 1, msg: "上传成功", data })
    //         }
    //     })
    // },
}
