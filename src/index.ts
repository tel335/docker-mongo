import koa from 'koa'
import bodyParser from 'koa-body'
import mongoose from 'mongoose'
import router from './routes/index'

const app = new koa()
const port = 3000

mongoose.connect('mongodb://mongo:27017/tel335_mongo_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.use(bodyParser({ multipart: true, urlencoded: true }))
app.use(router.routes())

app.listen(3000, () => {
    console.log(`Server is running on port ${port}`)
})
