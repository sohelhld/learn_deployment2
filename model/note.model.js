const mongoose = require('mongoose');


//note scehms

const noteSchema = mongoose.Schema ({
    title : String,
    body:String,
    sub:String,
    userID:String
},{
    versionKey:false
})

const noteModel = mongoose.model("note",noteSchema)

module.exports={
    noteModel
}