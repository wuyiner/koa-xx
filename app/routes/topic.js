const jwt = require('koa-jwt')
const Router = require('koa-router')
const router = new Router({prefix:'/topic'})
const {find, findById, create, update} =  require('../controllers/topic')
const {secret} = require('../config')

// 验证是否登录中间件
const auth = jwt({secret})

router.get('/', find)
router.post('/', auth,create)
router.get('/:id', findById)
router.patch('/:id', auth ,update)

module.exports = router 