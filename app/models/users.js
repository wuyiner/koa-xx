const mongoose = require('mongoose')

const {Schema, model} = mongoose

const userSchema = new Schema({
  __v: {
    type: Number,
    select: false
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  avatar_url: {
    type: String
  },
  gender: {
    type: String,
    enum: ['female', 'male'],
    default: 'female',
    require: true
  },
  headline: {
    type: String
  },
  locations: {
    type: [{type: String}],
    select: false
  },
  business: {type: String, select: false},
  employments: {
    type: [
      {
        company: {type: String},
        job: {type: String}
      }
    ],
    select: false
  },
  educations: {
    type: [{
      school: {type: String},
      major: {type: String},
      diploma: {
        type: Number, enum: [1,2,3,4,5]
      },
      entrance_year: {type: String},
      graduation_year: {type: String}
    }],
    select: false
  },
  following: {
    type: [{type: Schema.Types.ObjectId, ref: 'User'}],
    select: false
  }
})

module.exports = model('User',userSchema)