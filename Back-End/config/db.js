const mongoose=require('mongoose');


exports.dbConn=async ()=>{
    try{
    
    const dbURL="mongodb+srv://monalisasahu:jashper@cluster0.mwwrk.mongodb.net/productdatabase?retryWrites=true&w=majority"
     await mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})
     console.log(`Database connected`);
    }catch(err){
        console.log(`Database connection error ${err.message}`);
    }
    }


    
    

