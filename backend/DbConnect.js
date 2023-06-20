const mongosse=require('mongoose')


const DbConnect=async()=>{
  const connect= await  mongosse.connect(process.env.DB)
  console.log('connect to database succesfully')
}


module.exports=DbConnect