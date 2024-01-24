const express = require('express')
const router = express.Router()
const commentsController = require('../controllers/comments');

// 针对后台的电影分类的路由
router
    .get('/commentsList', commentsController.commentsList)
    .post('/addcomments', commentsController.addcomments)


module.exports = router