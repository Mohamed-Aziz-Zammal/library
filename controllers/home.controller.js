const homeModel=require('../models/home.model')





exports.threebookControllers=(req,res,next)=>{

    homeModel.getThreeBooks().then(books=>{
        res.render('index',{books:books})
    })

}
