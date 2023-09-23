const homeControllers=require('../controllers/home.controller')
//const bookControllers=require('../controllers/book.controller')

const router=require('express').Router()


router.get('/',homeControllers.threebookControllers)
//router.get('/books',bookControllers.getAllbookControllers)



module.exports=router