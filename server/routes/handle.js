const response = require('../utils/response')

const bcrypt = require('bcryptjs')//验证密码
const jwt = require('jsonwebtoken')//动态生成token
// 用于 生成token 和 解密token 的字符串
const SECRET = 'qwertyuiop'
const UserModel = require('../models/user')
const JsonModel = require('../models/Json')
const SearchModel = require('../models/Search')
const ProgramModel = require('../models/Program')

module.exports = {
    // 登录路由处理
    async loginIn (req, res) {
        let username = req.body.username
        let password = req.body.password
        // 根据用户名查找用户
        const user = await UserModel.findOne({ username }).select('+password')
        // 用户不存在
        if (!user) {
            response(res, 1, '用户不存在')
            return
        }
        // 用户存在, 验证密码
        // const isPassword = bcrypt.compareSync(password, user.password)
        // 密码错误
        if (password !== user.password) {
            response(res, 1, '密码错误')
            return
        }
        // 登陆成功, 生成token
        const token = jwt.sign({
            id: String(user._id)
        }, SECRET)
        // 返回token
        response(res, 0, '登录成功', { username }, token)
    },
    async getJsonList (req,res){
        let avatar = req.body.avatar
        // 获取第几页数据, 不传为第一页
        let page = Number(req.query.page) ? Number(req.query.page) : 1;
        // 每页多少条数据, 不传获取5条
        let pageSize = Number(req.query.pageSize) ? Number(req.query.pageSize) : 5;
        // 需要跳过的数据条数
        let skip = (page - 1) * pageSize;
        // 数据库中装备总数
        const total = await JsonModel.find().countDocuments()
        const JsonList = await JsonModel.find().skip(skip).limit(pageSize)

        response(res, 0, '获取列表成功',  { total, JsonList })
    },
    async searchList (req, res){
        const search_list = await SearchModel.find({})
        response(res, 0, '获取辅助查询列表成功', search_list)
    },
    async programList(req ,res){
        const program_list = await ProgramModel.find({})
        response(res , 0 , '获取项目列表成功' , program_list)
    }
}