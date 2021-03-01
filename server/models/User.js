/**
 * 用户信息
 */
const mongoose = require('../plugins/db')

let Schema = mongoose.Schema;

const UserSchema = new Schema({
    username : { type: String },                    //用户账号
    password: {type: String},                        //密码
    logindate : { type: Date}                       //最近登录时间
})


module.exports = mongoose.model('User', UserSchema)