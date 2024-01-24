const path = require("path");
const moviesModels = require("../models/moviesModels");
const formidabale = require("formidable");
const md5 = require("md5");

module.exports = {
  //电影列表查询
  getMovieList(req, res) {
    moviesModels.getMovieList((err, data) => {
      if (err) {
        res.send({ code: 0, msg: "获取失败" });
      } else {
        res.send({ code: 1, msg: "获取成功", data });
        // console.log(data)
      }
    });
  },

  //根据电影id查询
  getMovieById(req, res) {
    let movie_id = req.query.movie_id;
    moviesModels.getMovieById(movie_id, (err, data) => {
      if (err) {
        res.send({ code: 0, msg: "查询失败" });
      } else {
        res.send({ code: 1, msg: "查询成功", data });
      }
    });
  },

  //根据电影id删除
  delMovieById(req, res) {
    let movie_id = req.query.movie_id;
    moviesModels.delMovieById(movie_id, (err, data) => {
      if (err) {
        res.send({ code: 0, msg: "删除失败" });
      } else {
        res.send({ code: 1, msg: "删除成功", data });
      }
    });
  },

  //根据cateId查询
  getMovieBycateId(req, res) {
    let cateId = req.query.cateId;
    moviesModels.getMovieBycateId(cateId, (err, data) => {
      if (err) {
        res.send({ code: 0, msg: "查询失败" });
      } else {
        res.send({ code: 1, msg: "查询成功", data });
      }
    });
  },

  //根据电影名查询
  getByMovieName(req, res) {
    let movieName = req.query.movieName;
    console.log(req.query);
    moviesModels.getByMovieName(movieName, (err, data) => {
      if (err) {
        res.send({ code: 0, msg: "查询失败" });
      } else {
        if (data.length === 0) {
          res.send({ code: 101, msg: "未查找到影片", data });
        } else {
          res.send({ code: 1, msg: "查询成功", data });
        }
      }
    });
  },

  //文件上传
  fileUpload(req, res) {
    let form = new formidabale.IncomingForm();
    form.uploadDir = path.join(__dirname, "../public/uploads");

    //保留拓展名
    form.options.keepExtensions = true;

    form.parse(req, (err, fileds, files) => {
      if (err) {
        res.json({ code: 0, msg: "上传失败" });
      } else {
        console.log(files.avatar);
        res.json({
          code: 1,
          msg: "上传成功",
          src: `/uploads/${files.avatar.newFilename}`,
        });
      }
    });
  },
};
