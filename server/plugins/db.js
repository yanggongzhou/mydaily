const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/mygztest1',{ useNewUrlParser: true,useUnifiedTopology:true})

mongoose.connection.on('error', () => { console.log('数据库连接失败la~') })

mongoose.connection.once('open', () => { console.log('数据库连接成功da~') })

//将 mongoose 导出
module.exports = mongoose