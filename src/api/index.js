const express= require('express')
const  multer= require('multer')
const apiRouter = express.Router()
// const upload = multer({ dest: 'uploads/' })

// Create a storage object with a given configuration
const storage = require('multer-gridfs-storage')({
	url: 'mongodb://ajay123:ajay123@ds213612.mlab.com:13612/mypdfs'
});
// console.log(storage)

// Set multer storage engine to the newly created object
const upload = multer({ 
	storage: storage ,
	limits: {
		fileSize : 80000
	},
	fileFilter(req,file,cb) {
		console.log('req.file ,', req.file)
		console.log(file)
		console.log(file.mimetype)
		if(file.mimetype ===`application/pdf`) {
			console.log(`File Yo`)
			cb(null, true)
		}
		else{
			console.log('Here')
			const error = new Error('Wrong Mimetype')
			error.code="wtf"
			console.log(error.message)
			// cb(null, false)
			cb(error, false)
		}
}})


apiRouter.get('/', (req,res) => {
	res.render('index')
})

apiRouter.post('/pdfs/upload' , upload.single('pdf'), (req,res,next) =>{
	console.log('Heree')
// console.log(req.body); no text fields
console.log(req.file);
res.send('is working')
	// res.redirect('/api/v1')
})

apiRouter.use((err,req,res,next) => {
	if(err.code==='wtf') {
	res.status(422).json({err : `only pdfs allowed`})
	}
	
	res.status(433).json({size: 'Too large'})
	
})



module.exports=apiRouter
