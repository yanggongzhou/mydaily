const mongoose = require("mongoose")
let Schema = mongoose.Schema;

const ProgramSchema = new Schema({
    name : { type: String },
    duty:{ type:String },
    introduction: { type:String },
    address: { type: String },
})

module.exports = mongoose.model('Program', ProgramSchema)