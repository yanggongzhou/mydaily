/**
 * 列表信息
 */
const mongoose = require('../plugins/db')

let Schema = mongoose.Schema;

const JsonSchema = new Schema({
    name:{type: String},
    json:{type: String},
    cover:{type: String},
    avatar: {type: String},
})


module.exports = mongoose.model('Json', JsonSchema)