const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const md5 = require('md5')

//引入路由
const moviesRouter = require('./routes/moviesRouter')
const categoryRouter = require('./routes/categoryRouter')
const userRouter = require('./routes/userRouter')
const favRouter = require('./routes/favRouter')
const commentsRouter = require('./routes/comments')
const admin_routes = require('./routes/admin_routes')
const back_routes = require('./routes/back_routes')

const app = express();

//允许跨域
app.use(cors());

//建立服务器
app.listen(3004, () => {
  console.log("http://127.0.0.1:3004");
});

//添加body-parser的解析模式
//可以解析key=value&key=value
//extended: false调用内置的核心模块
app.use(bodyParser.urlencoded({ extended: false }));
//解析{key:value}
app.use(bodyParser.json());

app.use(express.static("public"));
app.use(express.static("views"));

app.use("/", express.static(path.join(__dirname, "public/")));
app.use("/admin", express.static(path.join(__dirname, "views/")));


//注入路由
app.use('/api',moviesRouter)
app.use('/api',categoryRouter)
app.use('/adduser',userRouter)
app.use('/user',userRouter)
app.use('/fav',favRouter)
app.use('/comments',commentsRouter)
app.use('/admin',admin_routes)
app.use('/admin',back_routes)
