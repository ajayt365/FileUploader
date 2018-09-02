const mongoose= require('mongoose')
const app = require('./src/app')
mongoose.connect('mongodb://ajay123:ajay123@ds213612.mlab.com:13612/mypdfs', ()=> {
	console.log('connected')
})