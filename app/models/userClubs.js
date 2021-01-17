const mongoose = require('mongoose')

const {Schema, model} = mongoose

const userClubSchema = new Schema({
  __v: {
    type: Number,
    select: false
  },
  userId: {
    type: String,
    require: true,
  },
  club: {
    type: String,
    require: true
  },
  avatar: {
    type: String,
  },
})
module.exports = model('UserClub',userClubSchema)