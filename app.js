const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose') // 載入 mongoose
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

app.get('/', (req, res) => {
    console.log('todo list')
})

app.listen(3000,() => {
    console.log('App is running on http://localhost:3000.')
})