// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import { app } from "./app.js";

import connectDB from "./db/index.js";
 
dotenv.config({
   path:'./env'
})


connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000, () =>{
     console.log(`server is running at port: ${process.env.PORT}`);
     
  })
})
.catch((err)=>{
  console.log("mongodb connection failed ",err);
})


/*
import express from "express"
const app = express()

( async ()=>{
  try {
      await   mongoose.connect(`${process.env.MONGODB_URI} /${DB_NAME}` )
    app.on("error",(error)=>{
      console.log("ERROR",error);
      throw error
    })
  
    app.listen(process.env.PORT,()=>{
      console.log(`app is listen on port ${process.env.PORT}`);
    })

  } catch (error) {
     console.log(error);
     throw error 
  }
})  ()
*/