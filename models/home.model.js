const mongoose=require("mongoose")

var schemaBook=mongoose.Schema({
    _id:String,
    title:String,
    description:String,
    price:Number,
    author:String,
    image:String

})

var Book=mongoose.model('book',schemaBook)
var url='mongodb://127.0.0.1:27017/library'

exports.getThreeBooks=()=>{
    return new Promise((resolve,reject)=>{
    mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
       return Book.find({}).limit(3)

    }).then(books=>{
        mongoose.disconnect()
        resolve(books)
    }).catch(err=>reject(err))





    })

}

exports.getallBooks=()=>{
    return new Promise((resolve,reject)=>{
    mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
       return Book.find({})

    }).then(books=>{
        mongoose.disconnect()
        resolve(books)
    }).catch(err=>reject(err))





    })

}

exports.getOneBooks=(id)=>{
    return new Promise((resolve,reject)=>{
    mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
       return Book.findById(id)

    }).then(books=>{
        mongoose.disconnect()
        resolve(books)
    }).catch(err=>reject(err))





    })

}

