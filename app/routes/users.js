// const jsonwebtoken = require('jsonwebtoken')
const jwt = require('koa-jwt')
const Router = require('koa-router')
const router = new Router({prefix:'/users'})
const {
  find, findUserById, deleteUser, 
  create, updateUser, login, checkOwner, 
  listFollowing, follow, getCurrentUser,
  unfollow, listFollower, checkUserExist} = require('../controllers/users')
const {secret} = require('../config')

// 添加验证中间件
// const auth = async (ctx, next) => {
//   const {authorization = ''} = ctx.request.header
//   const token = authorization.replace('Bearer ', '')
//   try{
//     const user = jsonwebtoken.verify(token, secret)
//     ctx.state.user = user
    
//   } catch(err){
//     ctx.throw(401, err.message)
//   }
//   await next()
// }

const auth = jwt({secret})

// 获取用户列表
router.get('/', find)
router.get('/getCurrentUser', auth,getCurrentUser)
// 添加用户
router.post('/', create)
// 获取具体某个用户信息
router.get('/:id', findUserById)
router.patch('/:id',auth,checkOwner,updateUser)
router.delete('/:id', auth,checkOwner,deleteUser)
router.post('/login',login)
router.get('/:id/following',auth,listFollowing)
router.get('/:id/follower',listFollower)
router.put('/following/:id', auth, checkUserExist,follow )
router.delete('/unfollowing/:id', auth,  checkUserExist,unfollow)

module.exports = router 