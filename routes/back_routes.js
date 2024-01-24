const express = require("express");
const router = express.Router()
// 注入控制器
const movieRouter = require('../controllers/back_controllers')

// 获取数据
router.get('/getmovie', movieRouter.getmovie)

// 分类
function sort() {
    // 获取分类页面的数据
    router.get('/getlist', movieRouter.getlist)
    // 添加分类
    router.post('/postcate', movieRouter.postadmin)
    // 获取分类
    router.get('/getadmin', movieRouter.getadmin)
    // 删除分类
    router.delete('/dellist', movieRouter.dellist)
    //新增数据
    router.post('/addmoview', movieRouter.addmoview)
    // 新增电影数据
    router.post("/postmovies", movieRouter.postmovies)
    // 新增电影图片数据
    // router.post('/postmovieImg', movieRouter.postmovieImg)
} sort()



// 暴露
module.exports = router;
