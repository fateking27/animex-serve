const express = require("express");
const router = express.Router()
// // 注入控制器
const backstage_routes = require('../controllers/admin_controllers')


//获取数据
router.post('/postadmin', backstage_routes.postadmin)

// 暴露
module.exports = router;
