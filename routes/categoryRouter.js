const express = require('express')
const router = express.Router()
const CategoryController = require('../controllers/CategoryController');

// 针对后台的电影分类的路由
router.get('/anime_type', CategoryController.categoryList)


module.exports = router