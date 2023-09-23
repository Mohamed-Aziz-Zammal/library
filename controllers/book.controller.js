const homeModel=require('../models/home.model')





exports.getAllbookControllers=(req,res,next)=>{

    homeModel.getallBooks().then(books=>{
        res.render('books',{books:books})
    })

}

exports.getOnebookControllers=(req,res,next)=>{
    let id=req.params.id

    homeModel.getOneBooks(id).then(book=>{
        res.render('details',{book:book})
    })

}