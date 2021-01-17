const mongoose = require('mongoose')

const {Schema, model} = mongoose

const userSchema = new Schema({
  __v: {
    type: Number,
    select: false
  },
  userid: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true
  },
  avatar: {
    type: String,
  },
  deptOrderList: {
    type: [
      {
        dept_id: {type: String}
      }
    ]
  },
  // 入会状态 0: 待审核，1: 审核通过， -1:审核不通过
  status: {
    type: Number,
    enum: [0, 1, -1],
    default: 0,
    require: true
  },
  // 审核意见
  auditMind: {
    type: String,
    select: false
  },
  role: {
    type: string,
    enum: ['admin', 'regular'],
    default: 'regular',
    require: true,
  },
  clubList: {
    type: [{type: Schema.Types.ObjectId, ref: 'UserClub'}]
  }
})
module.exports = model('User1',userSchema)