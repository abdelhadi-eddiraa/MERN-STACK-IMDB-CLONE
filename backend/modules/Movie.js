const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const MovieSchema= new Schema({

    name:{type:String,require:true},
    img:{type:String,require:true},
    year:{type:Number,require:true},
    rating:{type:Number,require:true},
    genre:{type:[String],require:true},

})



module.exports=mongoose.model('movie',MovieSchema)