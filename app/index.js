const Koa = require('koa')
const koaBody = require('koa-body')
const koaStatic = require('koa-static')
const app = new Koa()
const routing = require('./routes')
const error = require('koa-json-error')
const parameter = require('koa-parameter')
const mongoose = require('mongoose')
const path =require('path')
const {connectionStr} = require('./config')

mongoose.connect(connectionStr, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false} ,() => {
  console.log('MongoDB连接成功了')
})
mongoose.connection.on('error', console.error)
// app.use(async (ctx, next) => {
//   try {
//     await next()
//   } catch(err){
//     ctx.status = err.status || err.statusCode || 500
//     ctx.body = {
//       message: err.message
//     }
//   }
// })
app.use(koaStatic(path.join(__dirname, 'public')))
app.use(error({
  postFormat: (e, {stack, ...rest}) => {
    return process.env.NODE_ENV === 'production' ? rest : {stack, ...rest}
  }
}))
app.use(koaBody({
  multipart: true,
  formidable: {
    uploadDir: path.join(__dirname, '/public/uploads'),
    keepExtensions: true
  }
}))
app.use(parameter(app))
routing(app)
app.listen(3000, ()=> {
  console.log('程序已启动')
});