const express = require ('express')
const app = express()
app.use(express.json())
var cors = require('cors')
require('dotenv').config()
const connectDB  = require('./Config/connectDB')
const port = process.env.PORT



app.use(cors())
connectDB()
app.use(express.json())
app.use ('/users' , require ('./Routes/userRoutes') )
app.use ('/events' , require ('./Routes/eventRoutes') )
app.use ('/news' , require ('./Routes/newsRoutes') )
app.use ('/products' , require ('./Routes/productRoutes') )
app.use ('/mails' , require ('./Routes/mailRoutes') )
app.use("/donations", require("./Routes/donationRoutes"));
app.use("/orders", require("./Routes/orderRoutes"));

app.listen(port,(err)=>{
    err? console.log(err): console.log('server is running')
})