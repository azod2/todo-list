const express = require('express')
const mongoose = require('mongoose') // 載入 mongoose
const exphbs = require('express-handlebars');
const Todo = require('./models/todo') // 載入 Todo model
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const router = express.Router()
// 引用路由器
const routes = require('./routes')


const app = express()
const port = 3000




app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost/todo-list') // 設定連線到 mongoDB
//取得資料庫連線狀態
const db = mongoose.connection
//連線異常
db.on('error', () => {
    console.log('mongodb error!')
})
//連線成功
db.once('open', () => {
    console.log('mongodb connected!')
})

//轉換PUT跟DELETE
app.use(methodOverride('_method'))

// 將 request 導入路由器
app.use(routes)


app.listen(3000,() => {
    console.log('App is running on http://localhost:3000.')
})