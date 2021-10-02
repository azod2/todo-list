const express = require('express')
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
// 引用路由器
const routes = require('./routes')

require('./config/mongoose')

const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))

//轉換PUT跟DELETE
app.use(methodOverride('_method'))

// 將 request 導入路由器
app.use(routes)

//監聽
app.listen(3000,() => {
    console.log('App is running on http://localhost:3000.')
})