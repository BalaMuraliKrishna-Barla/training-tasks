const mongoose=require('mongoose');

const dotenv=require('dotenv');
dotenv.config();


DB_USERNAME=process.env.DB_USERNAME;
DB_PASSWORD=process.env.DB_PASSWORD;

const db_link = `mongodb://127.0.0.1:27017/BOOK-STORE`;

const connectionWithDB=()=>{
    
mongoose
.connect( db_link, { useNewUrlParser: true, useUnifiedTopology: true })
.then(function(db){
    console.log("__ DB CONNECTED __");
})
.catch(function(err){
    console.log(err);
})

}

module.exports= connectionWithDB;
