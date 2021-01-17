const mongoose = require('mongoose')

const {Schema, model} = mongoose

const clubSchema = new Schema({
  __v: {
    type: Number,
    select: false
  },
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true
  },
  avatar: {
    type: String,
  },
})
module.exports = model('Club',clubSchema)