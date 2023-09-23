  
const bookControllers=require('../controllers/book.controller')

const router=require('express').Router()



router.get('/books',bookControllers.getAllbookControllers)
router.get('/books/:id',bookControllers.getOnebookControllers)


module.exports=router