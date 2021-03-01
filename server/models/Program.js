const mongoose = require("mongoose")
let Schema = mongoose.Schema;

const SearchSchema = new Schema({
    name : { type: String },
    address: {type: String},
})

module.exports = mongoose.model('Searchs', SearchSchema)