const express= require('express')
const port = process.env.PORT || 5001
const app= express();
const path=require('path')
const apiRouter = require('./api')
const mongoose= require('mongoose')

// mongoose.connect('mongodb://ajay123:ajay123@ds213612.mlab.com:13612/mypdfs', ()=> {
// 	console.log('connected')
// }) --watch views --watch src 

//Rules

app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.static(path.join(__dirname ,'..','/public')))
app.use('/api/v1' , apiRouter)

app.get('/' , (req,res) =>{
	res.send('Here we will serve an API')
})

app.listen(port, () => {
	console.log(`Listening me on ${port} `)
})
// console.log(typeof app, app) // don't know why the result is like this 

// ToDo:
// 1. Connect to mlab Database .              Done :)
// 2. To be able to retreive all pdf files as json from mlab database
// 3. To be able to make a post request to upload a pdf to mlab database.
//Refactor it later



module.exports=app